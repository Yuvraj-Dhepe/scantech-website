import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // Get the submission ID from the request
    const { id } = await req.json()

    // Fetch the submission details
    const { data: submission, error } = await supabaseClient
      .from('contact_submissions')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error

    // Send email notification using Mailjet
    const mailjetUrl = 'https://api.mailjet.com/v3.1/send';
    const mailjetApiKey = Deno.env.get('MAILJET_API_KEY');
    const mailjetSecretKey = Deno.env.get('MAILJET_SECRET_KEY');

    if (!mailjetApiKey || !mailjetSecretKey) {
      throw new Error('Mailjet API credentials are not configured');
    }

    const auth = btoa(`${mailjetApiKey}:${mailjetSecretKey}`);

    const emailResponse = await fetch(mailjetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`
      },
      body: JSON.stringify({
        Messages: [
          {
            From: {
              Email: "yuvi.phone1@gmail.com", // Use your verified email address
              Name: "Scantech Website"
            },
            To: [
              {
                Email: "yuvi.dhepe21@gmail.com",
                Name: "Scantech Sales"
              }
            ],
            Subject: `New Contact Form Submission: ${submission.product || 'General Inquiry'}`,
            HTMLPart: `
              <h1>New Contact Form Submission</h1>
              <p><strong>Name:</strong> ${submission.name}</p>
              <p><strong>Email:</strong> ${submission.email}</p>
              <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
              <p><strong>Company:</strong> ${submission.company || 'Not provided'}</p>
              <p><strong>Product:</strong> ${submission.product || 'Not specified'}</p>
              <p><strong>Message:</strong> ${submission.message}</p>
              <p><strong>Submitted at:</strong> ${new Date(submission.created_at).toLocaleString()}</p>
            `,
            TextPart: `
              New Contact Form Submission

              Name: ${submission.name}
              Email: ${submission.email}
              Phone: ${submission.phone || 'Not provided'}
              Company: ${submission.company || 'Not provided'}
              Product: ${submission.product || 'Not specified'}
              Message: ${submission.message}
              Submitted at: ${new Date(submission.created_at).toLocaleString()}
            `
          }
        ]
      })
    });

    const emailResult = await emailResponse.json();
    console.log('Email sending result:', emailResult);

    // Log the submission
    console.log('New submission:', submission);

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error processing request:', error)

    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : String(error) }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
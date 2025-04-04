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
    const body = await req.json()
    console.log('Request body:', body)

    const { id } = body
    console.log('Submission ID:', id)

    // Fetch the submission details
    console.log('Fetching submission details from database...')
    const { data: submission, error } = await supabaseClient
      .from('contact_submissions')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Error fetching submission:', error)
      throw error
    }

    console.log('Submission details:', submission)

    // Send email using a simple HTTP request to an email service
    console.log('Preparing to send email notification...');

    // Prepare email content
    const emailContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${submission.company || 'Not provided'}</p>
      <p><strong>Product:</strong> ${submission.product || 'Not specified'}</p>
      <p><strong>Message:</strong> ${submission.message}</p>
      <p><strong>Submitted at:</strong> ${new Date(submission.created_at).toLocaleString()}</p>
    `;

    // For now, we'll just log the email content
    console.log('Email content prepared');
    console.log('Would send email with subject:', `New Contact Form Submission: ${submission.product || 'General Inquiry'}`);
    console.log('Would send to: yuvi.phone1@gmail.com');

    // In a production environment, you would use a service like:
    // - Email.js webhook
    // - Resend.com API
    // - SendGrid API
    // - Or forward to your own server endpoint that handles email sending

    // Example of how you would use a service like Resend.com:
    // const emailApiKey = Deno.env.get('EMAIL_API_KEY');
    // if (emailApiKey) {
    //   try {
    //     const response = await fetch('https://api.resend.com/emails', {
    //       method: 'POST',
    //       headers: {
    //         'Authorization': `Bearer ${emailApiKey}`,
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         from: 'yuvi.dhepe21@gmail.com',
    //         to: 'yuvi.phone1@gmail.com',
    //         subject: `New Contact Form Submission: ${submission.product || 'General Inquiry'}`,
    //         html: emailContent
    //       })
    //     });
    //
    //     const result = await response.json();
    //     console.log('Email API response:', result);
    //   } catch (emailError) {
    //     console.error('Error sending email:', emailError);
    //   }
    // }

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

    // Improved error handling with more details
    let errorMessage = 'Unknown error';
    let errorDetails = {};

    if (error instanceof Error) {
      errorMessage = error.message;
      errorDetails = { name: error.name, stack: error.stack };
    } else if (typeof error === 'object' && error !== null) {
      try {
        errorMessage = JSON.stringify(error);
        errorDetails = error;
      } catch (e) {
        errorMessage = 'Error object could not be stringified';
      }
    } else {
      errorMessage = String(error);
    }

    return new Response(
      JSON.stringify({
        error: errorMessage,
        details: errorDetails,
        timestamp: new Date().toISOString()
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
'use server'

import { supabase } from '@/lib/supabase';

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
}) {
  try {
    // Log the Supabase URL and key to verify they're being loaded correctly
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Using Supabase client');

    // Validate form data
    if (!formData.name || !formData.email) {
      return { success: false, error: 'Name and email are required' };
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([formData]);

    if (error) {
      console.error('Supabase error:', error);
      return { success: false, error: error.message };
    }

    // Return success
    return { success: true, data: formData };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    };
  }
}
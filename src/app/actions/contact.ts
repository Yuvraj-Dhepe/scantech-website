'use server'

import { supabase } from '@/lib/supabase';
import logger from '@/lib/logger';

// Define the return type for the form submission
type ContactFormResult = { success: true; data: any } | { success: false; error: string | any };

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
}): Promise<ContactFormResult> {
  try {
    // Log the Supabase URL and key to verify they're being loaded correctly
    logger.info('Contact form submission started');
    logger.debug('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    logger.debug('Form data:', { ...formData, message: formData.message.substring(0, 20) + '...' });

    // Validate form data
    if (!formData.name || !formData.email) {
      logger.warn('Form validation failed: missing name or email');
      return { success: false, error: 'Name and email are required' };
    }

    // Insert into Supabase
    logger.info('Attempting to insert data into Supabase');
    const { error } = await supabase
      .from('contact_submissions')
      .insert([formData]);

    if (error) {
      logger.error('Supabase error:', error);
      return { success: false, error: error.message };
    }

    // Return success
    logger.info('Contact form submission successful');
    return { success: true, data: formData };
  } catch (error) {
    logger.error('Unexpected error submitting form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    };
  }
}
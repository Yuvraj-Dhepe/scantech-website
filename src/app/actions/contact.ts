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
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([formData])
      .select();
      
    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, error };
  }
}
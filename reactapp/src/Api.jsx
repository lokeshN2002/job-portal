import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// validate environment api backend url here
if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables');
    console.log('VITE_SUPABASE_URL:', supabaseUrl);
    console.log('VITE_SUPABASE_KEY:', supabaseKey ? 'Present' : 'Missing');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchJobs() {
    try {
        const { data, error } = await supabase.from('postjob').select('*');

        if (error) {
            console.error('Error fetching jobs:', error);
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Failed to fetch jobs:', error);
        return [];
    }
}
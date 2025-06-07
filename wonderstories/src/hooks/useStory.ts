import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON;
const supabase = createClient(supabaseUrl, supabaseAnon);

export default function useStory() {
  const createStory = async (data: any) => {
    const { error, data: row } = await supabase.from('stories').insert(data).select().single();
    if (error) throw error;
    return row;
  };

  return { createStory };
}

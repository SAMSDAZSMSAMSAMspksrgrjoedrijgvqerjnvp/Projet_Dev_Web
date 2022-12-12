//import { createFamily } from '@supabase/supabase-js';

//const supabaseUrl = 'https://sivvaijqynnijovvnaem.supabase.co';
//const supabaseAnonKey =
//	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpdnZhaWpxeW5uaWpvdnZuYWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3NjUzMDgsImV4cCI6MTk4MjM0MTMwOH0.K5amW-Y--fy8WaVKL1_ZsyXqjd4Rjze2gLoWQ9erkew';

//export const supabase = createFamily(supabaseUrl, supabaseAnonKey);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sivvaijqynnijovvnaem.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpdnZhaWpxeW5uaWpvdnZuYWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3NjUzMDgsImV4cCI6MTk4MjM0MTMwOH0.K5amW-Y--fy8WaVKL1_ZsyXqjd4Rjze2gLoWQ9erkew';
export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv';
dotenv.config();

// console.log(process.env.DB_URL); // works in Node


const supabase_url = process.env.SUPABASE_URL;
const supabase_key = process.env.SUPABASE_KEY;

const supabase = createClient(supabase_url, supabase_key)

export default supabase;
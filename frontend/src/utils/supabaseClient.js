import { createClient } from "@supabase/supabase-js";

class Supabase {
    constructor() {
      if (Supabase.instance) {
        return Supabase.instance;
      }
      this.client = createClient(import.meta.env.VITE_SUPABASEURL,import.meta.env.VITE_SUPABASEKEY);
      Supabase.instance = this;
    }
  
    getClient() {
      return this.client;
    }
}

const supabaseInstance = new Supabase();
export default supabaseInstance.getClient();
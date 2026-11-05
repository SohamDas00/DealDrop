'use server'

import { revalidatePath } from "next/cache";
import { createClient } from "../utils/superbase/server"
import { redirect } from "next/navigation";

export async function signOut(){
    const superbase=await createClient();
    await superbase.auth.signOut();
    revalidatePath('/');
    redirect('/');
}
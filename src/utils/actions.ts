'use server'
import { redirect } from "next/navigation"
import { createClient } from "./supabase/server"

const signIn = async () => {
  const supabase = await createClient()
  const auth_callback_url = "http://localhost:3000/auth/callback"

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: auth_callback_url
    }
  })

  if (error) {
    console.log(error)
  } else {
    redirect(data.url)
  }

}

const signOut = async () => {
  const supabase = await createClient()
  await supabase.auth.signOut()
}

export { signIn, signOut }

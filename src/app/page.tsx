// app/page.tsx
import { createClient } from '@/utils/supabase/server'
import { signOut } from '@/utils/actions'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  console.log(user)

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <form action={signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  )
}

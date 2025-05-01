// app/page.tsx
import { createClient } from '@/utils/supabase/server'
import { signOut } from '@/utils/actions'
import { Button } from '@/components/ui/button'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()



  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <form action={signOut}>
        <Button variant='elevated' type="submit">Sign Out</Button>
      </form>
    </div>
  )
}

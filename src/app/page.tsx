// app/page.tsx
import { signOut } from '@/utils/actions'
import { cookies } from 'next/headers'
import { Button } from '@/components/ui/button'

export default async function Home() {

  const cookieStore = await cookies()
  const userData = cookieStore.get('user-data')

  const user = userData ? JSON.parse(userData.value) : null

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <form action={signOut}>
        <Button variant='elevated' type="submit">Sign Out</Button>
      </form>
    </div>
  )
}

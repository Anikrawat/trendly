// app/page.tsx
import { signOut } from '@/utils/actions'
import { Button } from '@/components/ui/button'
import { cookies } from 'next/headers'

export default async function Home() {

  const cookieStore = await cookies()
  const userData = cookieStore.get('user-data')
  console.log(userData)

  const user = userData && userData.value?.trim() ? JSON.parse(userData.value) : null

  return (
    <div>
      <h1>Welcome, {user ? user.full_name : "User"}</h1>
      <form action={signOut}>
        <Button variant='elevated' type="submit">Sign Out</Button>
      </form>
    </div>
  )
}

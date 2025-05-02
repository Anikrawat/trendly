'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import trendlyText from '@/../public/images/trendly text.png'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserRound, MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils'
import { User } from '@supabase/supabase-js'
import { createClient } from '@/utils/supabase/client'
import { usePathname } from 'next/navigation'
import NavbarSidebar from './NavbarSidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut } from 'lucide-react';


const DropDown = ({ user }: { user: User }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className='cursor-pointer'>
            <AvatarImage src={user.user_metadata.avatar_url} alt="@shadcn" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-[#f8d6b3] border-2'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <UserRound className='text-black' />
            <p>Profile</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className='text-black' />
            <p>Sign Out</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )

}


const Navbar = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isSidebarOpen, setIsSideBarOpen] = useState<boolean>(false)

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient()
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      console.log(session?.user)
    }
    getUser()
  }, [])

  const pathname = usePathname()

  const navbarItems = [
    {
      name: "Home",
      href: '/'
    },
    {
      name: "Contact",
      href: '/contact'
    },
    {
      name: "About",
      href: '/about'
    },
    {
      name: user ? 'Start Selling' : 'Sign In',
      href: user ? '/admin' : '/login'
    },
  ]

  return (
    <nav className='border-b-2 w-[100vw] h-[12vh] grid grid-cols-2 lg:grid-cols-3 justify-items-center content-end'>
      <div className='mb-3 w-full flex justify-center'>
        <Image src={trendlyText} alt='trendly text' height={150} width={150}></Image>
      </div>


      <div className='w-full h-full hidden lg:flex gap-14 justify-center items-center text-lg'>
        {
          navbarItems.map((items, index) => (
            <Button asChild key={index} className={cn('border-transparent bg-transparent text-black text-lg hover:bg-transparent hover:border-primary h-12 px-4 rounded-full ', pathname === items.href && "bg-black text-white hover:bg-black hover:text-white")}><Link href={items.href}>{items.name}</Link></Button>
          ))
        }
      </div>

      <div className='w-full h-full flex justify-center items-center gap-4'>
        <div className='w-[15vw] h-fit hidden lg:flex items-center'>
          <Input type='text' placeholder='What are looking for?' className={cn(' outline-none focus:outline-none placeholder:text-gray-400 placeholder:text-sm flex-1 border-1')} />
          <Search className='mx-1' />
        </div>
        <div className='w-fit lg:hidden'>
          <Search />
        </div>
        <Link href='/wishlist'>
          <Heart />
        </Link>
        <Link href={'/shopping-cart'}>
          <ShoppingCart />
        </Link>
        <div>
          {user ? <DropDown user={user} /> : <UserRound />}
        </div>
        <div className='lg:hidden flex' onClick={() => setIsSideBarOpen(true)}>
          <MenuIcon />
        </div>
      </div>
      <NavbarSidebar open={isSidebarOpen} onOpenChange={setIsSideBarOpen} items={navbarItems} />
    </nav>
  )
}

export default Navbar

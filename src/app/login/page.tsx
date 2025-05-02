'use client'
import { Button } from "@/components/ui/button";
import { signIn as signInWithGoogle } from "@/utils/actions";
import Image from 'next/image'
import logoAndText from '@/../public/images/both logo and text.png'
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import appPreview from '@/../public/images/app preview.png'


const LoginPage = () => {

  const [isPending, startTransition] = useTransition()

  const handleSubmit = () => {
    startTransition(() => {
      signInWithGoogle()
    })
  }

  return (
    <div className="min-h-[100vh] min-w-[100vw] bg-[#f8d6b3] flex justify-center items-center">
      <div className="hidden lg:flex justify-center items-center w-[40vw] h-[75vh] bg-[#ff6b6b] rounded-bl-lg rounded-tl-lg border-t-2 border-l-2 border-b-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <Image src={appPreview} alt="app preview image" height='600' width='600'></Image>
      </div>
      <div className="lg:w-[40vw] w-[90vw] h-[75vh] bg-white rounded-br-lg rounded-tr-lg border-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center">
        <div className="lg:w-[60%] w-full lg:h-[80%] h-full bg-[#fdfd96] rounded-md border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
          <div className="w-full h-[50%] text-2xl flex flex-col justify-center items-center">
            <Image src={logoAndText} alt="logo and text" height='250' width='250' className="mb-10" />

            <p className="font-bold space-y-1 text-center">Where Trends Meet Your Cart</p>
            <p className="text-[#ff6b6b] font-bold space-y-1">-Let's Go Shopping</p>
          </div>
          <form className="flex flex-col items-center w-full" action={handleSubmit}>
            <Button variant='elevated' type="submit" disabled={isPending} className={cn('h-12 w-[90%] text-lg')}>Sign-in With Google</Button>
            <p className="text-md text-black text-center mt-4 xl:w-[15vw] sm:w-fit">
              By continuing, you agree to Trendly’s <Link href="#" className="text-blue-500">Terms & Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </div >
  )
}

export default LoginPage;

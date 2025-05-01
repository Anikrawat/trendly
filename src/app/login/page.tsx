'use client'
import { Button } from "@/components/ui/button";
import { signIn as signInWithGoogle } from "@/utils/actions";
import Image from 'next/image'
import logoAndText from '@/../public/images/both logo and text.png'
import { cn } from "@/lib/utils";
import { useTransition } from "react";

const LoginPage = () => {

  const [isPending, startTransition] = useTransition()

  const handleSubmit = () => {
    startTransition(() => {
      signInWithGoogle()
    })
  }

  return (
    <div className="min-h-[100vh] min-w-[100vw] bg-[#f8d6b3] flex justify-center items-center">
      <div className="hidden w-[40vw] h-[75vh] bg-[#ff6b6b] rounded-bl-lg rounded-tl-lg border-t-2 border-l-2 border-b-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:flex">
      </div>
      <div className="w-[40vw] h-[75vh] bg-white rounded-br-lg rounded-tr-lg border-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center">
        <div className="w-[60%] h-[80%] bg-[#fdfd96] rounded-md border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col">
          <div className="w-full h-[50%] text-2xl flex flex-col justify-center items-center">
            <Image src={logoAndText} alt="logo and text" height='250' width='250' className="mb-10" />

            <p className="font-bold space-y-1">Where Trends Meet Your Cart</p>
            <p className="text-[#ff6b6b] font-bold space-y-1">-Let's Go Shopping</p>
          </div>
          <form className="flex justify-center" action={handleSubmit}>
            <Button variant='elevated' type="submit" disabled={isPending} className={cn('h-12 w-[90%] text-lg')}>Sign-in With Google</Button>
            <p className="text-xs text-gray-400 text-center mt-4 xl:w-[15vw] sm:w-fit">
              By continuing, you agree to Trendly’s <a href="#" className="text-blue-500">Terms & Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div >
  )
}

export default LoginPage;

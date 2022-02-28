import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import MainBG from '../images/bg.jpeg'

function Login() {
  const { authenticate } = useMoralis()

  return (
    <div className="realtive bg-black ">
      <h1>Login</h1>
      <div className=" absolute z-50 flex w-full flex-col items-center justify-center space-y-12 ">
        <h1 className="mb-16 text-left font-sans text-6xl font-extrabold text-[#e0b7fa] sm:mb-24 sm:text-5xl md:mb-20 md:text-6xl lg:mb-28 lg:text-7xl ">
          ENTER THE METAVERSE
        </h1>

        <button
          onClick={authenticate}
          className=" animate-pulse bg-[#881bcc] p-2 font-bold text-white"
        >
          LOGIN USING WALLET
        </button>
      </div>
      <div className="h-screen w-full">
        <Image src={MainBG} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default Login

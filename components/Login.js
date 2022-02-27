import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Login() {
  const { authenticate } = useMoralis()

  return (
    <div className="realtive bg-black ">
      <h1>Login</h1>
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-10 ">
        <Image
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
          className="rounded-full object-cover"
        />

        <button
          onClick={authenticate}
          className="animate-pulse rounded-lg bg-yellow-500 p-3 font-bold"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="h-screen w-full">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login

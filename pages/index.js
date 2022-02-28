import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header'
import Messages from '../components/Messages'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()
  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-hidden overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-screen-xl">
        <Header />
        <Messages />
      </div>
    </div>
  )
}

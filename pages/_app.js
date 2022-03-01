import '../styles/globals.css'
import Head from 'next/head'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoralisProvider
        appId="4xXVKmmgJHwJB12TuAIOPq9tzPm0jPn8RvAWb7uC"
        serverUrl="https://8b9yssufttms.usemoralis.com:2053/server"
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </>
  )
}

export default MyApp

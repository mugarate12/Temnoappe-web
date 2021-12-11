import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import ContextWrapper from './../context'

import {
  Alert,
  Header
} from './../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="temnoappê web" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <ContextWrapper>
        <Alert />
        <Header />

        <Component {...pageProps} />
      </ContextWrapper>
    </>
  )
}

export default MyApp

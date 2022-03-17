import React, {Fragment} from 'react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Avengers</title>
        <meta name="robots" content='index, follow' />
        <meta name="description" content="List of shows of Avengers movie. Avengers based movie and show with with different languages." />
        <link rel="canonical" href="http://localhost:3000/tv-shows/avengers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}
export default MyApp

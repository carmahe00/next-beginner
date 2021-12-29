import Head from 'next/head'

import 'styles/layout.css'
import 'styles/globals.css'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name="description" content="Awesome Youtube Channel" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

import Head from 'next/head'
import '../styles/globals.css' // 您的全局样式

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2634092855285462" 
          crossorigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 
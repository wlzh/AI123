export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <head>
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2634092855285462" 
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 
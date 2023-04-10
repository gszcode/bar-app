import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, pagina, bebida }) => {
  return (
    <div>
      <Head>
        <title>BarGSZ - {pagina}</title>
        <meta name="description" content="Sitio de Bebidas" />
        <meta name="author" content="GSZCODE" />
      </Head>
      <Header bebida={bebida} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

import React from 'react'
import Layout from '@/components/Layout'
import Listado from '@/components/Listado'

const Tienda = ({ bebidas }) => {
  return (
    <Layout pagina="Tienda">
      <main className="contenedor">
        <h1 className="heading">Nuesta Colección</h1>
        <Listado bebidas={bebidas} />
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/bebidas`
  const respuesta = await fetch(url)
  const bebidas = await respuesta.json()

  return {
    props: { bebidas }
  }
}

export default Tienda

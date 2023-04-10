import React from 'react'
import Image from 'next/legacy/image'
import Layout from '@/components/Layout'
import styles2 from '../../styles/Producto.module.css'

const Producto = ({ bebida }) => {
  const { descripcion, imagen, nombre, precio } = bebida[0]

  return (
    <Layout pagina={`Bebida ${nombre}`}>
      <div className={styles2.bebida}>
        <Image
          layout="responsive"
          width={500}
          height={370}
          src={imagen.url}
          alt={`Imagen Bebida ${nombre}`}
        />

        <div className={styles2.contenido}>
          <h3>{nombre}</h3>
          <p className={styles2.descripcion}>{descripcion}</p>
          <p className={styles2.precio}>${precio}</p>

          <form className={styles2.formulario}>
            <label>Cantidad:</label>
            <select>
              <option value="">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al Carrito" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { url } }) {
  const urlBebida = `${process.env.API_URL}/bebidas?url=${url}`
  const respuesta = await fetch(urlBebida)
  const bebida = await respuesta.json()

  return {
    props: {
      bebida
    }
  }
}

export default Producto

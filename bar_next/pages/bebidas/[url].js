import { useState } from 'react'
import Image from 'next/legacy/image'
import Layout from '@/components/Layout'
import styles2 from '../../styles/Producto.module.css'

const Producto = ({ bebida, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(1)
  const { descripcion, imagen, nombre, precio, id } = bebida[0]

  const handleSubmit = (e) => {
    e.preventDefault()

    if (cantidad < 1) {
      alert('Cantidad no válida')
      return
    }

    const bebidaSeleccionada = {
      id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(bebidaSeleccionada)
  }

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

          <form className={styles2.formulario} onSubmit={handleSubmit}>
            <label>Cantidad:</label>
            <select
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value="0">-- Seleccione --</option>
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

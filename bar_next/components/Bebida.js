import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import styles from '../styles/Bebida.module.css'

const Bebida = ({ bebida }) => {
  const { descripcion, imagen, nombre, precio, url } = bebida
  return (
    <div className={styles.bebida}>
      <Image
        layout="responsive"
        width={500}
        height={370}
        src={imagen.url}
        alt={`Imagen Bebida ${nombre}`}
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link className={styles.enlace} href={`/bebidas/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  )
}

export default Bebida

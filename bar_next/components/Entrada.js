import { formatearFecha } from '@/helpers'
import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Entrada.module.css'

const Entrada = ({ entrada }) => {
  const { titulo, resumen, imagen, published_at, id, url } = entrada

  return (
    <article className={styles.contenido}>
      <Image
        width={800}
        height={700}
        layout="responsive"
        src={imagen.url}
        alt={`Imagen blog ${titulo}`}
      />

      <div>
        <h1>{titulo}</h1>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Entrada
        </Link>
      </div>
    </article>
  )
}

export default Entrada

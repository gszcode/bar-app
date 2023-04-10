import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/legacy/image'
import { useRouter } from 'next/router'

const Header = ({ bebida }) => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <Image
              src="/img/logo.png"
              width={300}
              height={150}
              alt="Imagen Logo"
            />
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <Image
                layout="fixed"
                width={40}
                height={40}
                src="/img/carrito.jpg"
                alt="imagen carrito"
              />
            </Link>
          </nav>
        </div>

        {bebida && (
          <div className={styles.modelo}>
            <h1>Cóctel - {bebida.nombre}</h1>
            <p>{bebida.descripcion}</p>
            <p className={styles.precio}>${bebida.precio}</p>
            <Link href={`/bebidas/${bebida.url}`} className={styles.enlace}>
              Ver Producto
            </Link>
          </div>
        )}
      </div>

      {router.pathname === '/' && (
        <div className={styles.bebida}>
          <Image
            layout="fixed"
            width={380}
            height={600}
            src="/img/header_bebida.jpg"
            alt="imagen header bebida"
          />
        </div>
      )}
    </header>
  )
}

export default Header

import '@/styles/normalize.css'
import '@/styles/globals.css'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const carritoLocalS = JSON.parse(localStorage.getItem('carrito')) ?? []

    setCarrito(carritoLocalS)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = (producto) => {
    if (carrito.some((bebida) => bebida._id === producto._id)) {
      const carritoActualizado = carrito.map((bebida) => {
        if (bebida._id === producto._id) {
          bebida.cantidad = producto.cantidad
        }

        return bebida
      })

      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, producto])
    }
  }

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((bebida) => {
      if (bebida._id === producto._id) {
        bebida.cantidad = producto.cantidad
      }

      return bebida
    })

    setCarrito(carritoActualizado)
  }

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((producto) => producto._id !== id)

    setCarrito(carritoActualizado)
  }

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarProducto={eliminarProducto}
    />
  )
}

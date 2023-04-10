import React from 'react'
import Bebida from './Bebida'
import styles from '../styles/Listado.module.css'

const Listado = ({ bebidas }) => {
  return (
    <div className={styles.listado}>
      {bebidas.map((bebida) => (
        <Bebida key={bebida.url} bebida={bebida} />
      ))}
    </div>
  )
}

export default Listado

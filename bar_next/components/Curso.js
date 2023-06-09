import React from 'react'
import styles from '../styles/Curso.module.css'

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso

  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2>{titulo}</h2>
          <p className={styles.texto}>{contenido}</p>

          <a className={styles.enlace} href="#">
            Más Información
          </a>
        </div>
      </div>

      <style jsx>{`
        section {
          padding: 10rem 0;
          margin-top: 10rem;
          background-image: url(${imagen.url});
          background-size: cover;
          background-position: 50%;
        }
      `}</style>
    </section>
  )
}

export default Curso

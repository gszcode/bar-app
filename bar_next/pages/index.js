import Curso from '@/components/Curso'
import Layout from '@/components/Layout'
import Listado from '@/components/Listado'
import ListadoBlog from '@/components/ListadoBlog'

export default function Home({ bebidas, curso, blogs }) {
  return (
    <Layout pagina="Inicio" bebida={bebidas[6]}>
      <main className="contenedor">
        <h1 className="heading">Nuesta Colección</h1>
        <Listado bebidas={bebidas} />
      </main>

      <Curso curso={curso} />

      <section className="contenedor">
        <ListadoBlog entradas={blogs} />
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  const urlBebidas = `${process.env.API_URL}/bebidas`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resBebidas, resCursos, resBlogs] = await Promise.all([
    fetch(urlBebidas),
    fetch(urlCursos),
    fetch(urlBlogs)
  ])

  const [bebidas, curso, blogs] = await Promise.all([
    resBebidas.json(),
    resCursos.json(),
    resBlogs.json()
  ])

  return {
    props: { bebidas, curso, blogs }
  }
}

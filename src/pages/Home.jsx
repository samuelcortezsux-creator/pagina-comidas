import Inicio from '../components/Inicio'
import Menu from '../components/Menu'
import Promociones from '../components/Promociones'
import Nosotros from '../components/Nosotros'
import Contacto from '../components/Contacto'

// Página de inicio: junta las secciones que se recorren con scroll
// (los enlaces del Navbar como #menu, #contacto, siguen funcionando
// igual que antes, porque todos viven dentro de esta misma página).
function Home() {
  return (
    <>
      <Inicio />
      <Menu />
      <Promociones />
      <Nosotros />
      <Contacto />
    </>
  )
}

export default Home

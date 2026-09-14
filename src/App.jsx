import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Carrito from './pages/Carrito'

// App.jsx es el componente "padre":
// - CarritoProvider da acceso al carrito a toda la app.
// - BrowserRouter + Routes deciden qué página se muestra según la URL:
//   "/"        -> Home (todas las secciones de siempre)
//   "/carrito" -> Carrito (la página nueva)
// Navbar y Footer quedan FUERA de <Routes> porque se ven en ambas páginas.
function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App

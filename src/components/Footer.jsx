
function Footer() {
  const anioActual = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-1">🍽️ Sabor Casero — Comida casera boliviana</p>
        <p className="mb-0 small text-white-50">
          &copy; {anioActual} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer

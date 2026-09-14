import { Link } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext'

function Navbar() {
  const { totalItems } = useCarrito()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🍽️ Sabor Casero
        </Link>

        {/* Botón hamburguesa que aparece en pantallas pequeñas (celular) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav ms-auto gap-2 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="/#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#menu">Menú</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#promociones">Promociones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#nosotros">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contacto">Contacto</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/carrito">
                <i className="bi bi-cart3 fs-5"></i>
                {totalItems > 0 && (
                  <span className="badge rounded-pill bg-danger ms-1">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import { Link } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext'

// Esta es una PÁGINA (no una sección de la home), por eso vive en
// src/pages/ y no en src/components/. React Router se encarga de
// mostrarla solo cuando la URL es "/carrito" (ver App.jsx).
function Carrito() {
  const { items, quitarDelCarrito, vaciarCarrito, totalPrecio } = useCarrito()

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-4">Tu Carrito</h2>

        {items.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted fs-5">Todavía no agregaste ningún platillo.</p>
            <Link to="/" className="btn btn-danger">
              Ver el menú
            </Link>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Platillo</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="d-flex align-items-center gap-2">
                        <img
                          src={item.imagen}
                          alt={item.nombre}
                          width="50"
                          height="50"
                          style={{ objectFit: 'cover', borderRadius: '6px' }}
                        />
                        {item.nombre}
                      </td>
                      <td>Bs {item.precio}</td>
                      <td>{item.cantidad}</td>
                      <td>Bs {item.precio * item.cantidad}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => quitarDelCarrito(item.id)}
                        >
                          Quitar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between align-items-center border-top pt-3">
              <h4 className="mb-0">Total: Bs {totalPrecio}</h4>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary" onClick={vaciarCarrito}>
                  Vaciar carrito
                </button>
                <button className="btn btn-danger">Confirmar pedido</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Carrito

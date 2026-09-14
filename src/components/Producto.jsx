import { useCarrito } from '../context/CarritoContext'


function Producto({ id, nombre, descripcion, precio, imagen }) {
  const { agregarAlCarrito } = useCarrito()

  const manejarClick = () => {
    agregarAlCarrito({ id, nombre, precio, imagen })
  }

  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={imagen}
          className="card-img-top"
          alt={nombre}
          style={{ height: '180px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text text-muted flex-grow-1">{descripcion}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-danger">Bs {precio}</span>
            <button className="btn btn-outline-dark btn-sm" onClick={manejarClick}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Producto

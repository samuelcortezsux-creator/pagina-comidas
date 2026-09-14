
const promos = [
  {
    id: 1,
    titulo: '2x1 en Salteñas',
    detalle: 'Válido de lunes a viernes, de 8:00 a 11:00 am.',
    icono: 'bi-egg-fried',
  },
  {
    id: 2,
    titulo: 'Combo Familiar',
    detalle: '2 Silpanchos + 2 bebidas por Bs 70. Todos los días.',
    icono: 'bi-people-fill',
  },
  {
    id: 3,
    titulo: 'Descuento Universitario',
    detalle: '15% de descuento presentando tu carnet universitario.',
    icono: 'bi-mortarboard-fill',
  },
]

function Promociones() {
  return (
    <section id="promociones" className="py-5 bg-warning text-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Promociones de la semana</h2>

        <div className="row g-1">
          {promos.map((promo) => (
            <div className="col-md-4" key={promo.id}>
              <div className="card bg-secondary bg-opacity-25 border-0 h-100 text-center p-4">
                <i className={`bi ${promo.icono} fs-1 mb-3`}></i>
                <h5 className="fw-bold">{promo.titulo}</h5>
                <p className="mb-0">{promo.detalle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Promociones

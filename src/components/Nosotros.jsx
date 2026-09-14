// Sección "Nosotros": usa el sistema de grillas de Bootstrap (row / col)
// para poner una imagen a un lado y el texto al otro.
function Nosotros() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img
              src="https://picsum.photos/seed/restaurante/600/400"
              alt="Interior del restaurante"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Sobre Nosotros</h2>
            <p>
              Sabor Casero nació hace más de 10 años en el corazón de la
              ciudad, con la idea de compartir la comida tradicional boliviana
              tal como se prepara en casa.
            </p>
            <p>
              Hoy seguimos usando recetas familiares, ingredientes locales y
              mucho cariño en cada plato que sale de nuestra cocina.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros

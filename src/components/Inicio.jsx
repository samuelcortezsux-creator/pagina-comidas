// Sección "Inicio": lo primero que ve el usuario al entrar a la página.
// Es un "hero" simple hecho con clases de utilidad de Bootstrap
// (py-5 = padding vertical, text-center = texto centrado, etc.)
function Inicio() {
  return (
    <section id="inicio" className="bg-warning-subtle py-5">
      <div className="container text-center py-5">
        <h1 className="display-4 fw-bold">Comida casera, hecha con cariño</h1>
        <p className="lead col-lg-8 mx-auto">
          En Sabor Casero preparamos cada plato como si fuera para nuestra
          propia familia. Ingredientes frescos, recetas de siempre y un
          servicio rápido para que disfrutes sin complicaciones.
        </p>
        <a href="#menu" className="btn btn-danger btn-lg mt-3">
          Ver el menú
        </a>
      </div>
    </section>
  )
}

export default Inicio

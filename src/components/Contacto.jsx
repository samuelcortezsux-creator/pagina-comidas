import { useState } from 'react'

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    mensaje: '',
  })
  const [enviado, setEnviado] = useState(false)


  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setFormulario({ ...formulario, [name]: value })
  }


  const manejarEnvio = (evento) => {
    evento.preventDefault() // evita que la página se recargue
    setEnviado(true)
    setFormulario({ nombre: '', mensaje: '' })
  }

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Contáctanos</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            {enviado && (
              <div className="alert alert-success" role="alert">
                ¡Gracias! Tu mensaje fue enviado correctamente.
              </div>
            )}

            <form onSubmit={manejarEnvio}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-danger w-100">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto

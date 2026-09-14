import Producto from './Producto'


const platillos = [
  {
    id: 1,
    nombre: 'Silpancho',
    descripcion: 'Arroz, papa, carne apanada, huevo frito y ensalada fresca.',
    precio: 25,
    imagen: '/img/silpancho.jpg',
  },
  {
    id: 2,
    nombre: 'Pique Macho',
    descripcion: 'Carne, salchicha, papas fritas, locoto y cebolla picante.',
    precio: 35,
    imagen: '/img/pique-macho.jpg',
  },
  {
    id: 3,
    nombre: 'Salteña',
    descripcion: 'Masa horneada rellena de guiso jugoso de carne o pollo.',
    precio: 8,
    imagen: '/img/saltena.jpg',
  },
  {
    id: 4,
    nombre: 'Sopa de Maní',
    descripcion: 'Crema de maní con papa, zanahoria, arroz y carne.',
    precio: 18,
    imagen: '/img/sopa-de-mani.jpg',
  },
  {
    id: 5,
    nombre: 'Anticucho',
    descripcion: 'Brochetas de corazón de res a la parrilla con papa y maní.',
    precio: 15,
    imagen: '/img/anticucho.jpg',
  },
  {
    id: 6,
    nombre: 'Api con Pastel',
    descripcion: 'Bebida caliente de maíz morado acompañada de pastel frito.',
    precio: 10,
    imagen: '/img/api-con-pastel.jpg',
  },
]

function Menu() {
  return (
    <section id="menu" className="py-5">
      <div className="container">
        <h2 className="text-center fw-dar mb-5">Nuestro Menú</h2>
        <p className="text-center text-muted mb-5">
          Elige tu plato favorito, preparado al momento
        </p>

        <div className="row">
          {/* .map() recorre el arreglo "platillos" y por cada uno
              crea un componente <Producto />, pasándole sus datos como props */}
          {platillos.map((platillo) => (
            <Producto
              key={platillo.id}
              id={platillo.id}
              nombre={platillo.nombre}
              descripcion={platillo.descripcion}
              precio={platillo.precio}
              imagen={platillo.imagen}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu

import { createContext, useContext, useState } from 'react'

// Un "Context" en React sirve para compartir información (en este caso,
// el carrito) entre componentes que no son padre-hijo directo, sin tener
// que pasar props manualmente por cada nivel (esto se llama "prop drilling").
const CarritoContext = createContext()

// Este Provider envuelve toda la app (lo hacemos en App.jsx) y le da
// acceso al carrito a cualquier componente que lo necesite.
export function CarritoProvider({ children }) {
  const [items, setItems] = useState([])


  const agregarAlCarrito = (producto) => {
    setItems((actual) => {
      const yaExiste = actual.find((item) => item.id === producto.id)

      if (yaExiste) {
        return actual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }

      return [...actual, { ...producto, cantidad: 1 }]
    })
  }

  
  const quitarDelCarrito = (id) => {
    setItems((actual) => actual.filter((item) => item.id !== id))
  }

  
  const vaciarCarrito = () => setItems([])

  
  const totalItems = items.reduce((suma, item) => suma + item.cantidad, 0)

  const totalPrecio = items.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0
  )

  return (
    <CarritoContext.Provider
      value={{
        items,
        agregarAlCarrito,
        quitarDelCarrito,
        vaciarCarrito,
        totalItems,
        totalPrecio,
      }}
    >
      {children}
    </CarritoContext.Provider>
  )
}


export function useCarrito() {
  return useContext(CarritoContext)
}

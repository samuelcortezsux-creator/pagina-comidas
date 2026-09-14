# Sabor Casero — Página Web de Comidas (React + Bootstrap)

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx        → Barra de navegación (incluye enlace al carrito)
│   ├── Inicio.jsx        → Sección hero de bienvenida
│   ├── Menu.jsx          → Lista de platillos (usa Producto.jsx)
│   ├── Producto.jsx      → Tarjeta reutilizable de un platillo
│   ├── Promociones.jsx   → Tarjetas de ofertas
│   ├── Nosotros.jsx      → Sección "Sobre nosotros"
│   ├── Contacto.jsx      → Formulario de contacto (useState)
│   └── Footer.jsx        → Pie de página
├── pages/
│   ├── Home.jsx          → Página "/" (agrupa Inicio, Menu, Promociones, Nosotros, Contacto)
│   └── Carrito.jsx       → Página "/carrito" (nueva, muestra el carrito de compras)
├── context/
│   └── CarritoContext.jsx → Guarda el estado global del carrito (React Context)
├── App.jsx               → Configura las rutas (React Router) y el CarritoProvider
├── App.css               → Estilos extra sobre Bootstrap
└── main.jsx              → Punto de entrada de React
```

## Cómo correrlo (Node v26.7.0)

1. Abre una terminal dentro de la carpeta `pagina-comidas`.
2. Instala las dependencias:
   ```
   npm install
   ```
3. Levanta el servidor de desarrollo:
   ```
   npm run dev
   ```
4. Abre en tu navegador la dirección que te muestre la terminal
   (normalmente `http://localhost:5173`).

## Novedades: Carrito de compras + página aparte (React Router)

- Se agregó **react-router-dom** a `package.json`. Es la librería
  estándar para tener varias "páginas" en una app de React sin
  recargar el navegador.
- **`App.jsx`** ahora define dos rutas:
  - `/` → `Home.jsx` (todo lo que ya tenías: Inicio, Menú, Promociones, etc.)
  - `/carrito` → `Carrito.jsx` (página nueva)
- **`CarritoContext.jsx`** guarda la lista de productos agregados usando
  `useState`, y expone funciones (`agregarAlCarrito`, `quitarDelCarrito`,
  `vaciarCarrito`) a través de React Context, para no tener que pasar
  props manualmente por cada componente.
- El botón **"Agregar"** en cada `Producto.jsx` llama a `agregarAlCarrito`.
- El ícono del carrito en el **Navbar** muestra un contador con la
  cantidad total de productos.

## Notas para tu explicación

- **Bootstrap** se usa vía CDN en `index.html`, no como paquete de npm.
- **Producto.jsx** recibe props (`id`, `nombre`, `descripcion`, `precio`,
  `imagen`) y usa el hook `useCarrito()` para agregar el platillo.
- **Context API** es la forma "sencilla" de React de compartir estado
  entre componentes que no son padre-hijo directo (alternativa a Redux).
- Todas las imágenes usan `picsum.photos` como marcador de posición.

## Subir a GitHub y publicarlo en línea

Ver instrucciones completas en el mensaje de Claude. En resumen:

1. `git init`, `git add .`, `git commit -m "Primer commit"`
2. Crear un repositorio vacío en GitHub y conectarlo con `git remote add origin ...`
3. `git push -u origin main`
4. Importar el repositorio en [vercel.com](https://vercel.com) (detecta Vite automáticamente)
5. El archivo `vercel.json` ya incluido hace que `/carrito` funcione bien al recargar la página.

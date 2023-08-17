import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";


function App () {

  return (
    <>
      <div className="layout">
        {/* ?cabecera */ }
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1>Mis Pelis</h1>
        </header>
        {/* ?barra de navegacion */ }
        <nav className="nav">
          <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Películas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
          </ul>
        </nav>
        {/* Contenido principal */ }
        <section className="content">
          {/* ?aquí van las películas */ }
          <Listado />
        </section>
        {/* ?Barra lateral */ }
        <aside className="lateral">
          <Buscador />
          <Crear />
          
        </aside>
        {/* ?Footer */ }
        <footer className="footer">
          &copy; Máster en JavaScript ES12 y TypeScript - <a href="https://lestradamus.es/">Lestradamus.es</a>
        </footer>
      </div>
    </>
  )
}

export default App

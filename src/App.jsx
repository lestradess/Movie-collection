import { List } from './components/List';
import { Searcher } from "./components/Searcher";
import { Create } from "./components/Create";
import { useState } from "react";


function App () {
  const [ listState, setListState ] = useState([]);


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
        {/* Menu*/ }
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
          <List listState={ listState } setListState={ setListState } />
        </section>
        {/* ?Barra lateral */ }
        <aside className="sidebar">
          <Searcher listState={ listState } setListState={ setListState } />
          <Create setListState={setListState}/>

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

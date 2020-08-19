import React, {Fragment, useState, useEffect}from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {
  // definir la categoria
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarAPI = async () => {
      const url =`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=a1cc20c88bd146b19b6de37cb200d772`
    
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria]);

  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div>
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
          />
      </div>
    </Fragment>
  );
}

export default App;

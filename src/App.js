import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //actualizacion del state, resultado del useSelect actualizado en Formulario
  const [categoria, guardarCategoria] = useState('');
  //actualizacion del state de las noticias en respuesta a la API 
  const [noticias, guardarNoticias] = useState([]);

  //Se ejecuta cada vez que se encuentra un cambio o actualizacion en el state de categoria
  useEffect(() => {
    
    const consultarAPI = async () => {

      //Se consume desde la API
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=de37825b83ab403aa069278ded489d96`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      //console.log(noticias);

      //se actualizan las noticias
      guardarNoticias(noticias.articles);

    }

    consultarAPI();

  }, [categoria]);

  return (
    <Fragment>

      <Header 
        titulo='Buscador de Noticias'
      />

      <div className='container white'>
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

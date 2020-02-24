import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'

function App() {

  //state del resultado del useSelect actualizado en Formulario
  const [categoria, guardarCategoria] = useState('');

  return (
    <Fragment>

      <Header 
        titulo='Buscador de Noticias'
      />

      <div className='container white'>
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
      </div>

    </Fragment>
  );
}

export default App;

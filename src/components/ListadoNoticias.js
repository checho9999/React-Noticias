import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types'

/*Elegimos de clave la URL porque seria la mejor candidata a ser unica*/
const ListadoNoticias = ( { noticias } ) =>  ( 
        <div className="row">
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url} 
                    noticia={noticia}
                />
            ))}
        </div>
);

ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}
 
export default ListadoNoticias;
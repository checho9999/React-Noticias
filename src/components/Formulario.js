import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'
                                          
const Formulario = ( { guardarCategoria } ) => {

    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

    //Utilizamos el custom hook (SelectNoticias es la interfaz)
    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    const buscarNoticias = e => {
        // para que no se envie el query string en la parte superior, ni se recarge la pagina
        e.preventDefault();

        //ponemos la categoria en el state
        guardarCategoria(categoria);
    }

    /* Como el styles.btn-block lo marca como undefined porque en el css esta con "-", 
    pero tampoco se puede poner aca el "-" porque es invalido para JS, entonces 
    o se pone el "_" en el css o se corrige con styles['btn-block'] para que sea un JS valido */ 
    return ( 

        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>

    );
}
 
export default Formulario;
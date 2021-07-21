import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//  Crear el Context
export const CategoriasContext = createContext();

//  Provider es donde se encuentran las funciones y State
const CategoriasProvider = (props) => {

    //  crer el state del Context
    const [categorias, guardarCategorias] =  useState([]);

    //  Ejecutar el llamado a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await axios.get(url);
            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, []);

    return (
        <CategoriasContext.Provider
            // los valores dentro de value, estarán disponibles para los demás componentes
        value={{
            categorias
            }}
        >
            {props.children} {/* Los diferentes componentes estarán dentro */}
        </CategoriasContext.Provider>
    );
}
export default CategoriasProvider;
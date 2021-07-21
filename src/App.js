//  https://www.thecocktaildb.com/api.php
//  https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list // EndPoint (usado)
//  https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin&c=Ordinary_Drink (usado)
//  https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta};
// scroll: { maxHeight: '500px', overflowY: 'scroll', overflowX: 'none' }
// <div className={ classes.scroll }> Se agregara un scroll cuando sea muy estrecho y el contenido salga hacia abajo </div>

import React from 'react';
import Header from './components/Header/header';
import Formulario from './components/Formulario/formulario';
import ListaRecetas from './components/ListaRecetas/listaRecetas';

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5" >
            <div className="row" >
              <Formulario />
            </div>

            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;

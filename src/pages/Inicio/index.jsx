// Inicio.js (por ejemplo)

import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@src//context/GlobalContext';
import Carrusel from '@src//componentes/Carrusel';
import Banner from '@src//componentes/Banner';

function Inicio() {
  const { videos, categorias} = useContext(GlobalContext);


  return (
    <div>
      <Banner />
      {categorias.map((categoria) => (
        <Carrusel
          key={categoria.nombre}
          datos={categoria}
          videos={videos.filter((video) => video.categoria === categoria.nombre)}
        />
      ))}
    </div>
  );
}

export default Inicio;

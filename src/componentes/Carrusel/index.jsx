import React, { useContext } from "react";
import VideoCard from "./VideoCard";
import TituloCategoria from "../TituloCategoria";
import "./Carrusel.css";

const Carrusel = ({ datos , videos}) => {
  const estiloTitulo = { backgroundColor: datos.colorPrimario };

  return (
    <>
      {videos.length > 0 && (
        <section className="carrusel">
          <TituloCategoria style={estiloTitulo}>{datos.nombre}</TituloCategoria>
          <div className="videos">
            {videos.map((video, index) => (
              <VideoCard
                key={index}
                datos={video}
                colorPrimario={datos.colorPrimario}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Carrusel;

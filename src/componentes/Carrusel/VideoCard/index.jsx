import React, { useState } from "react";
import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import ModalEditarVideo from "../../Modal";
import "./VideoCard.css";
import { GlobalContext } from '@src//context/GlobalContext'; 

const VideoCard = ({ datos, colorPrimario}) => {
  const { editarVideo , eliminarVideo} = React.useContext(GlobalContext);
  const { foto, id, titulo, descripcion, url , categoria} = datos;
  const [modalAbierto, setModalAbierto] = useState(false);
  const [mensaje, setMensaje] = useState(null);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const manejarEditarVideo = async (id, nuevoVideo) => {
    try {
      await editarVideo(id, nuevoVideo); 
      setMensaje("Video actualizado correctamente"); 
    } catch (error) {
      console.error("Error al actualizar el video:", error);
      setMensaje("Error al actualizar el video"); 
    }
  };

  return (
    <div
      className="videoCard"
      style={{
        "--colorPrimario": colorPrimario,
      }}
    >
      <Link to={`/${id}`}>
        <img className="imagen" src={foto} alt={titulo} />
      </Link>
      <div className="info">
        <button className="eliminar" onClick={() => eliminarVideo(id)}>
          <RiDeleteBin2Line className="icon" /> ELIMINAR
        </button>
        <button className="editar" onClick={abrirModal}>
          <RiEdit2Line className="icon" /> EDITAR
        </button>
      </div>
      <ModalEditarVideo
        isOpen={modalAbierto}
        onClose={cerrarModal}
        video={{ foto, id, titulo, descripcion , url, categoria}}
        editarVideo={manejarEditarVideo}
        colorPrimario={colorPrimario}
      />
    </div>
  );
};

export default VideoCard;

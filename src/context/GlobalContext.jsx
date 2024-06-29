import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

// Creamos el contexto
export const GlobalContext = createContext();

// Creamos el componente proveedor
export const GlobalProvider = ({ children }) => {
  // Definimos el estado global que queremos compartir
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [destacados, setDestacados] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resVideos = await fetch(`http://localhost:5000/videos`);
        const resCategorias = await fetch(`http://localhost:5000/categorias`);
        const resDestacados = await fetch(`http://localhost:5000/destacados`);
        const dataVideos = await resVideos.json();
        const dataCategorias = await resCategorias.json();
        const dataDestacados = await resDestacados.json();
        actualizarVideos(dataVideos);
        actualizarCategorias(dataCategorias);
        actualizarDestacados(dataDestacados);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  

  // Funciones para actualizar el estado global
  const actualizarVideos = (dataVideos) => {
    setVideos(dataVideos);
  };

  const actualizarCategorias = (dataCategorias) => {
    setCategorias(dataCategorias);
  };
  const actualizarDestacados = (dataDestacados) => {
    setDestacados(dataDestacados);
  };


  const registrarVideo = async (video) => {
    const nuevoVideo = { ...video, id: uuid() };
    const res = await fetch('http://localhost:5000/videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoVideo),
    });

    if (res.ok) {
        const data = await res.json();
        setVideos([...videos, data]);
    } else {
        console.error('Error al registrar el video');
    }
};

  const eliminarVideo = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/videos/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Error al eliminar el video');
      }

      const nuevosVideos = videos.filter((video) => video.id !== id);
      setVideos(nuevosVideos);
    } catch (error) {
      console.error('Error al eliminar el video:', error);
    }
  };


  const editarVideo = async (id, nuevoVideo) => {
    try {
      // Realizar la solicitud al backend para actualizar el video
      const response = await fetch(`http://localhost:5000/videos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoVideo), // Enviar los nuevos datos del video
      });
  
      if (!response.ok) {
        throw new Error('Error al actualizar el video');
      }
  
      // Actualizar el estado local si la actualización en el backend fue exitosa
      const videoEditado = videos.map((video) =>
        video.id === id ? { ...video, ...nuevoVideo } : video
      );
      setVideos(videoEditado);
  
      // Opcional: mostrar un mensaje de éxito o realizar otras acciones después de la actualización
      console.log('Video actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el video:', error);
      // Manejar errores o mostrar mensajes de error al usuario
    }
  };

  const crearCategoria = async (nuevaCategoria) => {
    const nuevaCategoriaConId = { ...nuevaCategoria, id: uuid() };
    try {
      const res = await fetch(`http://localhost:5000/categorias`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevaCategoriaConId),
      });

      if (!res.ok) {
        throw new Error('Error al crear la categoría');
      }

      const data = await res.json();
      setCategorias([...categorias, data]);
    } catch (error) {
      console.error('Error al crear la categoría:', error);
    }
  };

  const eliminarCategoria = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/categorias/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Error al eliminar la categoría');
      }

      const nuevasCategorias = categorias.filter((categoria) => categoria.id !== id);
      setCategorias(nuevasCategorias);
    } catch (error) {
      console.error('Error al eliminar la categoría:', error);
    }
  };

  // Pasamos el estado global y las funciones al valor del contexto
  const contextValue = {
    videos,
    categorias,
    destacados,
    actualizarVideos,
    actualizarCategorias,
    eliminarVideo,
    editarVideo,
    crearCategoria,
    eliminarCategoria,
    registrarVideo
  };

  // Retornamos el proveedor con el contexto y los children (componentes hijos)
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

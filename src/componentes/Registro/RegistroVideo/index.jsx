import React, { useState, useContext } from "react";
import "./RegistroVideo.css";
import Campo from "../../Campo";
import ListaOpciones from "../../ListaOpciones";
import Boton from "../../Boton";
import { GlobalContext } from '@src/context/GlobalContext';

const RegistroVideo = () => {
    const { categorias, registrarVideo } = useContext(GlobalContext);

    const [titulo, actualizarTitulo] = useState("");
    const [url, actualizarUrl] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [descripcion, actualizarDescripcion] = useState("");
    const [categoria, actualizarCategoria] = useState("");

    const [errorTitulo, setErrorTitulo] = useState(null);
    const [errorUrl, setErrorUrl] = useState(null);
    const [errorFoto, setErrorFoto] = useState(null);
    const [errorDescripcion, setErrorDescripcion] = useState(null);
    const [errorCategoria, setErrorCategoria] = useState(null);

    const manejarEnvio = (e) => {
        e.preventDefault();

        // Validar título
        if (titulo.length < 3 || titulo.length > 200) {
            setErrorTitulo('El título debe tener entre 3 y 200 caracteres.');
            return;
        } else {
            setErrorTitulo(null);
        }

        // Validar URL de foto
        if (!isPhotoURLValid(foto)) {
            setErrorFoto('La URL de la foto no es válida o no es una foto válida.');
            return;
        } else {
            setErrorFoto(null);
        }

        // Validar URL de video
        if (!isVideoURLValid(url)) {
            setErrorUrl('La URL del video no es válida o no es un video válido.');
            return;
        } else {
            setErrorUrl(null);
        }

        // Validar descripción
        if (descripcion.length < 3 || descripcion.length > 500) {
            setErrorDescripcion('La descripción debe tener entre 3 y 500 caracteres.');
            return;
        } else {
            setErrorDescripcion(null);
        }

        // Validar categoría
        if (!categoria) {
            setErrorCategoria('La categoría es requerida.');
            return;
        } else {
            setErrorCategoria(null);
        }

        // Si todas las validaciones pasan, enviar los datos
        let datosAEnviar = {
            titulo,
            url,
            foto,
            descripcion,
            categoria
        };
        registrarVideo(datosAEnviar);

        // Limpiar campos después de enviar el formulario
        limpiarCampos();
    };

    const limpiarCampos = () => {
        actualizarTitulo("");
        actualizarUrl("");
        actualizarFoto("");
        actualizarDescripcion("");
        actualizarCategoria("");
        setErrorTitulo(null);
        setErrorUrl(null);
        setErrorFoto(null);
        setErrorDescripcion(null);
        setErrorCategoria(null);
    };

    // Función para validar URL de foto
    const isPhotoURLValid = (url) => {
        const photoUrlPattern = /\.(jpg|jpeg|png|gif)$/i;
        return photoUrlPattern.test(url);
    };

    // Función para validar URL de video
    const isVideoURLValid = (url) => {
        const videoUrlPattern = /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?si=[a-zA-Z0-9_-]+$/;
        return videoUrlPattern.test(url);
    };

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el nuevo video</h2>
                <Campo
                    titulo="Título"
                    placeholder="Ingresar título"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                    mensajeError={errorTitulo}
                />
                <Campo
                    titulo="URL del video"
                    placeholder="Ingresar URL del video"
                    required
                    valor={url}
                    actualizarValor={actualizarUrl}
                    mensajeError={errorUrl}
                />
                <Campo
                    titulo="URL de la foto"
                    placeholder="Ingresar URL de la foto"
                    required
                    valor={foto}
                    actualizarValor={actualizarFoto}
                    mensajeError={errorFoto}
                />
                <Campo
                    titulo="Descripción"
                    placeholder="Ingresar descripción"
                    required
                    valor={descripcion}
                    actualizarValor={actualizarDescripcion}
                    mensajeError={errorDescripcion}
                />
                <ListaOpciones
                    titulo="Categoría"
                    valor={categoria}
                    actualizarValor={actualizarCategoria}
                    categorias={categorias}
                    mensajeError={errorCategoria}
                />
                <div className="bot">
                    <Boton type="submit">Crear</Boton>
                    <Boton type="button" onClick={limpiarCampos}>Limpiar</Boton>
                </div>
            </form>
        </section>
    );
};

export default RegistroVideo;

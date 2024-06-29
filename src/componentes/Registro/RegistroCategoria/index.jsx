import React, { useState, useContext } from "react";
import { GlobalContext } from '@src/context/GlobalContext';
import "./RegistroCategoria.css";
import Campo from "../../Campo";
import Boton from "../../Boton";
import Table from "../../Table"; // Importamos el componente Table

const RegistroCategoria = () => {
    const { categorias, crearCategoria } = useContext(GlobalContext);

    const [nombre, actualizarNombre] = useState("");
    const [color, actualizarColor] = useState("#2271D1");
    const [errorNombre, setErrorNombre] = useState(null);
    const [errorColor, setErrorColor] = useState(null);

    const manejarNuevaCategoria = (e) => {
        e.preventDefault();
        const nombreExistente = categorias.find(cat => cat.nombre === nombre);
        if (nombre.length < 3 || nombre.length > 200) {
            setErrorNombre('El nombre debe tener entre 3 y 200 caracteres.');
            return;
        } else if (nombreExistente) {
            setErrorNombre('El nombre elegido ya está en uso.');
            return;
        } else {
            setErrorNombre(null);
        }

        const colorExistente = categorias.find(cat => cat.colorPrimario === color);
        if (colorExistente) {
            setErrorColor('El color seleccionado ya está en uso.');
            return;
        } else {
            setErrorColor(null);
        }

        crearCategoria({ nombre, colorPrimario: color });

        actualizarNombre("");
        actualizarColor("#2271D1");
    };

    const limpiarCampos = () => {
        actualizarNombre("");
        actualizarColor("#2271D1");
        setErrorNombre(null);
        setErrorColor(null);
    };

    return (
        <section className="formulario">
            <form onSubmit={manejarNuevaCategoria}>
                <h2>Rellena el formulario para crear la nueva categoría</h2>
                <Campo
                    titulo="Nombre"
                    placeholder="Ingresar nombre de la categoría"
                    required
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                    mensajeError={errorNombre}
                />
                <Campo
                    titulo="Color"
                    placeholder="Ingresar el color en Hex"
                    required
                    valor={color}
                    actualizarValor={actualizarColor}
                    type="color"
                    mensajeError={errorColor}
                />
                <Table categorias={categorias} />
                <div className="bot-cat">
                    <Boton type="submit">Registrar categoría</Boton>
                    <Boton type="button" onClick={limpiarCampos}>Limpiar</Boton>
                </div>
            </form>
        </section>
    );
};

export default RegistroCategoria;

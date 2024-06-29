import React from "react";
import "./ListaOpciones.css";

const ListaOpciones = (props) => {
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    };

    return (
        <div className="lista-opciones">
            <label>{props.titulo}</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled hidden>
                    Seleccionar categoría
                </option>
                {props.categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.nombre}>
                        {categoria.nombre}
                    </option>
                ))}
            </select>
            {props.mensajeError && (
                <span className="error-mensaje">{props.mensajeError}</span>
            )}
        </div>
    );
};

export default ListaOpciones;

import React from "react";
import "./Table.css";

const Table = ({ categorias }) => {
    return (
        <div className="lista-categorias">
            <h3>Categorías existentes:</h3>
            <ul>
                {categorias.map((categoria) => (
                    <li key={categoria.id}       style={{
                        "--colorPrimario": categoria.colorPrimario,
                      }}>{categoria.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default Table;
import "./TituloCategoria.css"

function TituloCategoria({ style, children }) {
    return (
        <h1 className="titulo" style={style}>
            {children}
        </h1>
    );
}

export default TituloCategoria;

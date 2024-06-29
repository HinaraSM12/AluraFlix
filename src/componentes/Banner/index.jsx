import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@src//context/GlobalContext';
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
    const { destacados } = useContext(GlobalContext);
    const [index, setIndex] = useState(0);
    const intervalTime = 5000;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % destacados.length);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [destacados]);

    if (destacados.length === 0) return null;

    const currentVideo = destacados[index];

    return (
        <section className="banner">
            <div className="overlay">
                <div className="group-text">
                    <button>FRONT END</button>
                    <h2>Challenge React</h2>
                    <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
                <div className="container">
                    <Link to={`/${currentVideo.id}`}>
                        <img src={currentVideo.foto} alt={currentVideo.titulo} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Banner;

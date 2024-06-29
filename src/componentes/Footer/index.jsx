import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='redes'>
                <a href='https://www.aluracursos.com/'>
                    <img src="/img/facebook.png" alt='Facebook' />
                </a>
                <a href='https://www.aluracursos.com/'>
                    <img src="/img/twitter.png" alt='twitter' />
                </a>
                <a href='https://www.aluracursos.com/'>
                    <img src="/img/instagram.png" alt='instagram' />
                </a>
            </div>
                <Link to="/">
                    <img src="/img/Logo.png" alt="Logo" className="logo" />
                </Link>
            <div className='autor'>
                <strong>Desarrollado para Alura por Hinara Sánchez</strong>
            </div>
        </footer>
    );
}

export default Footer;

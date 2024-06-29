# AluraFlix

## Descripción

AluraFlix es una plataforma web moderna y dinámica diseñada para ofrecer a sus usuarios una experiencia completa en la gestión y visualización de videos. Desde su interfaz intuitiva y amigable, los usuarios pueden explorar una amplia variedad de contenidos audiovisuales organizados meticulosamente por categorías. La plataforma no solo facilita la reproducción de videos, sino que también permite gestionar de manera eficiente el contenido, incluyendo la adición, edición y eliminación de videos, asegurando así una biblioteca siempre actualizada y relevante. Con tecnologías avanzadas como React para una interfaz fluida y React Router DOM para una navegación sin interrupciones, AluraFlix garantiza una experiencia de usuario superior, complementada con estilos personalizados mediante Styled Components que aseguran un diseño atractivo y adaptado a las necesidades modernas de visualización de contenido multimedia. Además, gracias a la integración de React Icons, los usuarios disfrutan de una interfaz rica en detalles visuales y funcionales. Respaldada por Vite para una compilación rápida y eficiente del proyecto y desplegada en la plataforma de Vercel, AluraFlix no solo destaca por su funcionalidad y diseño, sino también por su capacidad para escalar y adaptarse a las necesidades cambiantes del mercado de entretenimiento digital.

## Contenidos

- [Descripción](#descripción)
- [Instalación](#instalación)
- [Funcionalidades](#funcionalidades)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura de Directorios](#estructura-de-directorios)
- [Créditos](#créditos)
- [Licencia](#licencia)

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu_usuario/aluraflix.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd aluraflix
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Configuración de la base de datos simulada con JSON Server
    ```
    npm init
    npm i -g json-server
    json-server --watch ./src/datos/datos-iniciales.json --port=5000
    ```
5. Inicia la aplicación:
   ```bash
   npm run dev
   ```
6. Abre tu navegador y ve a [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## Funcionalidades

- Ver videos: Los usuarios pueden navegar y ver videos disponibles.
- Detalles del video: Los usuarios pueden ver detalles de cada video, como descripción y categoría.
- Agregar videos: Se pueden agregar nuevos videos a la plataforma.
- Editar videos: Se  puede editar la información de videos existentes.
- Eliminar videos: Se  pueden eliminar videos de la plataforma.
- Agregar categorías: Se pueden agregar nuevas categorías a la plataforma.

### Futuro

Se planea integrar más funcionalidadesy migrar la base de datos.

## Tecnologías Utilizadas

- React: Biblioteca JavaScript para construir interfaces de usuario utilizando hooks.
- React Router DOM: Enrutador para la navegación dentro de la aplicación.
- Styled Components: Biblioteca para estilizar componentes con CSS dentro de JS.
- React Icons: Librería para integrar íconos en la aplicación React.
- Vite: Herramienta de compilación rápida para proyectos web.
- Node.js: Entorno de ejecución de JavaScript del lado del servidor.
- Vercel: Plataforma para realizar el deploy de aplicaciones web estáticas.

## Estructura de Directorios

- `src/`: Contiene el código fuente del proyecto.
- `components/`: Componentes reutilizables como Campo, ListaOpciones, etc.
- `pages/`: Contiene las páginas principales de la aplicación.
- `context/`: Contextos globales para el manejo del estado.
- `routes/`: Contiene las rutas de navegación.
- `datos/`: Contiene un archivo JSON que maneja la base de datos.
- `main.jsx`: Punto de entrada de la aplicación React.

## Créditos

Este proyecto fue desarrollado por Hinara Sánchez como parte de un curso de Alura Latam y Oracle Next Education.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
```
Este formato Markdown es adecuado para presentar información detallada de proyectos, facilitando la lectura y comprensión de cada sección.





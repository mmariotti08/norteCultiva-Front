import { Link } from "react-router-dom";
import style from "./Home.module.css";
import { useEffect, useState } from "react";

const Home = () => {
    const [ botonVisible, setBotonVisible ] = useState(false)


    useEffect(() => {

        window.scrollTo(0, 0)

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setBotonVisible(false);
            } else {
                setBotonVisible(true);
            }
       };

       window.addEventListener("scroll", handleScroll);
       return () => {
        window.removeEventListener("scroll", handleScroll);
       };
    }, []);



    
    
    return (
        <div className={style.container}>
            <div className={`${style.botonFlotante} ${botonVisible ? style.botonVisible : style.botonInvisible}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-arrow-down-short ${style.botonFlotante} ${botonVisible ? style.botonVisible : style.botonInvisible}`} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
            <img src="./public/IMG_3731.JPG" className={style.background}></img>
            <div className={style.Bienvenida}>
                <h1> Binevenido a El Norte Cultiva </h1>
            </div>
            <div className={style.Tienda}>
                <h1> Tienda virtual </h1>
                <h4> Descubrí productos premium para impulsar tus cultivos de cannabis.<br/> ¡Dale click al boton para conocer nuestra tienda!</h4>
                <Link to="/LandingTienda">
                    <button className={style.Boton}> {<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>} 
                    </button>
                </Link>
            </div>
            <div className={style.Asesoramiento}>
                <h1> Asesoramiento </h1>
                <h4>Comunicate con nuestros expertos en asesoramientos que te guiarán en cada etapa de tu cultivo<br/> ¡Dale click al boton para ponerte en contacto!</h4>
                <Link to="/PreguntasFrecuentes">
                    <button className={style.Boton}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg> 
                    </button>
                </Link>
            </div>  
        </div>
    )
}

export default Home;
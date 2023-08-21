import { Link } from "react-router-dom";
import style from "./Home.module.css";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    
    return (
        <div className={style.container}>
            <div className={style.Bienvenida}>
                <h1> Binevenido a El Norte Cultiva </h1>
            </div>
            <div className={style.Tienda}>
                <h1> Tienda virtual </h1>
                <h4> Descubrí productos premium para impulsar tus cultivos de cannabis.<br/> ¡Dale click al boton para conocer nuestra tienda!</h4>
                <Link to="/LandingTienda">
                    <button className={style.Boton}> Quiero ir a la tienda </button>
                </Link>
            </div>
            <div className={style.Asesoramiento}>
                <h1> Asesoramiento </h1>
                <h4>Comunicate con nuestros expertos en asesoramientos que te guiarán en cada etapa de tu cultivo<br/> ¡Dale click al boton para ponerte en contacto!</h4>
                <Link to="/PreguntasFrecuentes">
                    <button className={style.Boton}> Quiero asesoramiento </button>
                </Link>
            </div>  
        </div>
    )
}

export default Home;
import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
    return (
        <div className={style.container}>
            <div className={style.Bienvenida}>
                <h1> Binevenido a El Norte Cultiva </h1>
            </div>
            <div className={style.Tienda}>
                <h1> Tienda virtual </h1>
                <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat molestiae voluptatum</h4>
                <Link to="/LandingTienda">
                    <button className={style.Boton}> Quiero ir a la tienda </button>
                </Link>
            </div>
            <div className={style.Asesoramiento}>
                <h1> Asesoramiento </h1>
                <h4> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nesciunt tenetur maxime consequatu</h4>
                <Link to="/PreguntasFrecuentes">
                    <button className={style.Boton}> Quiero asesoramiento </button>
                </Link>
            </div>
                
            
        </div>
    )
}

export default Home;
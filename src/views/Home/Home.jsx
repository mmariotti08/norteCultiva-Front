import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
    return (
        <div className={style.container}>
            <h1>Tu novia puta con mi píngo se ahoga</h1>
            <Link to="/LandingTienda">
                <button> Quiero ir a la tienda </button>
            </Link>
            <Link to="/PreguntasFrecuentes">
                <button> Quiero asesoramiento </button>
            </Link>
            
        </div>
    )
}

export default Home;
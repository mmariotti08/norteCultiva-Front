import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [ prevScrollPos, setPrevScrollPos ] = useState(0);
    const [ visible, setVisible ] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [prevScrollPos])


    return(
        <div className={`${style.NavBar} ${visible ? style.NavBarVisible : style.NavBarHidden}`}>
            <div className={style.Container}>
                <Link to='/' className={style.NavLink}>
                    <span className={style.Title}>EL NORTE CULTIVA</span>
                </Link>
                <div className={style.LinksChicosContainer}>
                    <Link to="/LandingTienda" className={style.NavTienda}>
                        <span className={style.LinkTienda}> Tienda </span>
                    </Link>
                    <Link to="/aboutus" className={style.NavLink}>
                        <span className={style.LinkChico}> Sobre nosotros </span>
                    </Link>
                    <Link to="/contact" className={style.NavLink}>
                        <span className={style.LinkChico}> Contacto </span>
                    </Link>
                    
                    <Link to="/PreguntasFrecuentes" className={style.NavAsesoramiento}>
                        <span className={style.LinkTienda}> Asesoramiento </span>
                    </Link>
                </div>
            </div>

        </div>
    )
};
export default NavBar
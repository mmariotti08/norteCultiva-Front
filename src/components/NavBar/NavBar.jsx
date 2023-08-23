import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useEffect, useState } from "react";

const NavBar = () => {



    return(
        <div className={style.NavBar}>
            <div className={style.Container}>
                <Link to='/home' className={style.NavLink}>
                    <span className={style.Title}>EL NORTE CULTIVA</span>
                </Link>
                <div className={style.LinksChicosContainer}>
                    <Link to="/home" className={style.NavLink}>
                        <span className={style.LinkChico}> Diccionario </span>
                    </Link>
                    <Link to="/aboutus" className={style.NavLink}>
                        <span className={style.LinkChico}> Sobre nosotros </span>
                    </Link>
                    <Link to="/contact" className={style.NavLink}>
                        <span className={style.LinkChico}> Contacto </span>
                    </Link>
                </div>
            </div>

        </div>
    )
};
export default NavBar
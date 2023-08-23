import React from "react";
import { Link } from "react-router-dom";
import style from "./BotonesNav.module.css";

const BotonesNav = () => {
    return (
        <div className={style.BotonesNav}>
            <Link to="">
                <button className={style.Boton}> PARAFERNALIA </button>
            </Link>
            <Link to="">
                <button className={style.Boton}> JARDINERIA </button>
            </Link>
            <Link to="">
                <button className={style.Boton}> SEMILLAS </button>
            </Link>
            <Link to="">
                <button className={style.Boton}> MATERIA PRIMA </button> 
            </Link>
        </div>
    )
}

export default BotonesNav;
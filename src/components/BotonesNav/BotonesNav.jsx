import React from "react";
import { Link } from "react-router-dom";
import style from "./BotonesNav.module.css";

const BotonesNav = () => {
    return (
        <div className={style.BotonesNav}>
            <Link to="">
                <button className={style.Boton}> Parafernalia </button>
            </Link>
            <Link to="">
                <button className={style.Boton}> Jardineria </button>
            </Link>
            <Link to="">
                <button className={style.Boton}> Semillas </button>
            </Link>
            <Link to="">
                <button className={style.Boton}> Materia prima </button> 
            </Link>
        </div>
    )
}

export default BotonesNav;
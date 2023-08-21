import React from "react";
import { Link } from "react-router-dom"
import style from "./LandingTienda.module.css"
import { useEffect } from "react";

const LandingTienda = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className={style.LTsombra}>
            <div className={style.imagenPrincipal}>
                <img className={style.background} src="/public/IMG_3731.JPG"/>
                <h1>Tienda virtual </h1>
            </div>
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
            <div className={style.Productos}>
                <h1> Productos </h1>
            </div>
        </div>
    )
}

export default LandingTienda;
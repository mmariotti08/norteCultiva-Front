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
                <h1>Bienvenido a la tienda </h1>
            </div>
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
                    <button className={style.Boton}> Materia Prima </button> 
                </Link>
            </div>
            <div className={style.Productos}>
                <h1> Productos </h1>
            </div>
        </div>
    )
}

export default LandingTienda;
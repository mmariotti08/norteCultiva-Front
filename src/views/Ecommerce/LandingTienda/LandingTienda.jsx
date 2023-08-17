import React from "react";
import { Link } from "react-router-dom"
import style from "./LandingTienda.module.css"

const LandingTienda = () => {
    return (
        <div>
            <div className={style.imagenPrincipal}>
                <h1>Imagen principal / producto destacado / publicidad</h1>
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
            
        </div>
        
    )
}

export default LandingTienda;
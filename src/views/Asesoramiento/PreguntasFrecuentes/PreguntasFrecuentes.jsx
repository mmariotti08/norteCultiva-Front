import React from "react";
import { Link } from "react-router-dom";
import style from "./PreguntasFrecuentes.module.css";

const PreguntasFrecuentes = () => {
    return (
        <div  className={style.bg}>
            <div className={style.container}>
            <button> Pregunta frecuente </button>
            <button> Pregunta freceutne </button>
            <button> Pregunta frecuente </button>
            <button> Pregunta frecuente </button>
            <button> Pregunta freceunte </button>
            <Link to="/selectArea">
                <button> Asesoramiento personalizado </button>
            </Link>
            </div>
        </div>
    )
}

export default PreguntasFrecuentes;
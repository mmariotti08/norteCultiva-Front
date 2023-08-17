import React from "react";
import { Link } from "react-router-dom";
import style from "./PreguntasFrecuentes.module.css";

const PreguntasFrecuentes = () => {
    return (
        <div>
            <button> Pregunta frecuente </button>
            <button> Pregunta freceutne </button>
            <button> Pregunta frecuente </button>
            <button> Pregunta frecuente </button>
            <button> Pregunta freceunte </button>
            <Link to="/chat">
                <button> Asesoramiento personalizado </button>
            </Link>
        </div>
    )
}

export default PreguntasFrecuentes;
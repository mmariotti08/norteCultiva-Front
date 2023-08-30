import React from "react";
import style from "./Products.module.css";
import Jardineria from "./Jardineria/Jardineria";
import Parafernalia from "./Parafernalia/Parafernalia";
import Semillas from "./Semillas/Semillas";
import MateriaPrima from "./MateriaPrima/MateriaPrima";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div className={style.Productos}>
            <div className={style.destacados}>
                <h1> Destacados </h1>  
            </div>
            <Jardineria/>
            <div className={style.vermas}>
                <Link to="/Jardineria" className={style.Link}>
                    <h2> Ver más </h2>
                </Link>
            </div>
            <div className={style.destacados}>
                <h1> Destacados </h1>
            </div>
            <Parafernalia/>
            <div className={style.vermas}>
                <Link to="/Parafernalia" className={style.Link}>
                    <h2> Ver más </h2>
                </Link> 
            </div>
            <div className={style.destacados}>
                <h1> Destacados </h1>
            </div>
            <Semillas/>
            <div className={style.vermas}>
                <Link to="/Semillas" className={style.Link}>
                    <h2> Ver más </h2>
                </Link>
            </div>
            <div className={style.destacados}>
                <h1> Destacados </h1>
            </div>
            <MateriaPrima/>
            <div className={style.vermasBottom}>
                <Link to="/MateriaPrima" className={style.Link}>
                    <h2> Ver más </h2>
                </Link>
            </div>
            
        </div>
    )
}

export default Products;
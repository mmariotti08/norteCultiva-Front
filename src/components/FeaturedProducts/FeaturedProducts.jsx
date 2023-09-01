import React from "react";
import style from "./FeaturedProducts.module.css";
import FeaturedJardineria from "./FeaturedJardineria/FeaturedJardineria";
import FeaturedParafernalia from "./FeaturedParafernalia/FeaturedParafernalia";
import FeaturedSemillas from "./FeaturedSemillas/FeaturedSemillas";
import FeaturedMateriaPrima from "./FeaturedMateriaPrima/FeaturedMateriaPrima";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
    return (
        <div className={style.Productos}>
            <div className={style.destacados}>
                <h1> Destacados </h1>  
            </div>
            <FeaturedJardineria/>
            <div className={style.vermas}>
                <Link to="/Jardineria" className={style.Link}>
                    <h2> Ver más </h2>
                </Link>
            </div>
            <div className={style.destacados}>
                <h1> Destacados </h1>
            </div>
            <FeaturedParafernalia/>
            <div className={style.vermas}>
                <Link to="/Parafernalia" className={style.Link}>
                    <h2> Ver más </h2>
                </Link> 
            </div>
            <div className={style.destacados}>
                <h1> Destacados </h1>
            </div>
            <FeaturedSemillas/>
            <div className={style.vermas}>
                <Link to="/Semillas" className={style.Link}>
                    <h2> Ver más </h2>
                </Link>
            </div>
            <div className={style.destacados}>
                <h1> Destacados </h1>
            </div>
            <FeaturedMateriaPrima/>
            <div className={style.vermasBottom}>
                <Link to="/MateriaPrima" className={style.Link}>
                    <h2> Ver más </h2>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedProducts;
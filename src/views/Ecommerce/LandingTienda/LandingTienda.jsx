import React from "react";
import style from "./LandingTienda.module.css"
import { useEffect } from "react";
import { BotonesNav, FeaturedProducts, CarrouselTienda } from "../../../components/indexComponents";

const LandingTienda = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={style.LTsombra}>
            <CarrouselTienda/>
            <BotonesNav/>
            <FeaturedProducts/>    
        </div>
    )
}

export default LandingTienda;
import React from "react";
import { Link } from "react-router-dom";

const SelectArea = () => {
    return (
        <div>
            <h1> Sustrato inerte </h1>
            <h1> Tierra </h1>
            <Link to="/chat">
                <button> consultale a chatGPT </button>
            </Link>
        </div>
    )
}

export default SelectArea; 
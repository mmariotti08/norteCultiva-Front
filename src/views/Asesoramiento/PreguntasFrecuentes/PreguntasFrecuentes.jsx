import React from "react";
import { Link } from "react-router-dom";
import style from "./PreguntasFrecuentes.module.css";
import { useState } from "react";
const PreguntasFrecuentes = () => {
    const [selector, setSelector] = useState(null)

    const toggle=(i)=>{
        if(selector===i){
            return setSelector(null)
        }

        setSelector(i)
    }
    return (
        <div className={style.bg}>
        <div className={style.container}>
            <div className={style.acordion}>
                {data.map((item, i) => (
                    <div className={style.item} key={i}>
                        <div className={style.title} onClick={() => toggle(i)}>
                            <h1>{item.question}</h1>
                            <span>{selector === i ? "-" : "+"}</span>
                        </div>
                        <div
                            className={`${style.content} ${selector === i ? style.contentShow : ""}`}
                        >
                            <h4>{item.answer}</h4>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Link to='/chat'>
                    <button>Consulta</button>
                </Link>
            </div>
        </div>
        </div>
    );

}

const data = [
    {
        question: "Question1",
        answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        question: "Question2",
        answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        question: "Question3",
        answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        question: "Question4",
        answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
]

export default PreguntasFrecuentes;
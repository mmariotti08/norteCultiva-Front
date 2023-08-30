import React from 'react';
import style from "./Dashboard.module.css"

const Dashboard = () => {
  return (
    <div className={style.container}>
        <div className={style.productos}>
            <div>
                <h1>Nuevo Producto</h1>
                <p>Nombre<input type="text"/></p>
                <p>Marca:  
                    <select>
                        <option> Namasté </option>
                        <option> Top Crop </option>
                        <option> Kawsay </option>
                        <option> Bioenergy </option>
                        <option> Growmix </option>
                    </select>
                </p>
                <p>Categoria:
                    <select>
                        <option> Jardineria </option>
                        <option> Parafernalia </option>
                        <option> Semillas </option>
                        <option> MateriaPrima </option>
                    </select>
                </p>
                <p> Destacar <input type="checkbox"/> </p>
                <p> Detalles <input type="text"/></p>
                <p> Precio <input type="number"/></p>
                <p> imagen <input type="text"/></p>
                <p> Stock <input type="number"/></p>

            </div>
            <div>
                <h1> Modificar producto </h1>
                <h4> (elija una o varias opciones)</h4>
                <p>Nombre<input type="text"/></p>
                <p>Marca:  
                    <select>
                        <option> Namasté </option>
                        <option> Top Crop </option>
                        <option> Kawsay </option>
                        <option> Bioenergy </option>
                        <option> Growmix </option>
                    </select>
                </p>
                <p>Categoria:
                    <select>
                        <option> Jardineria </option>
                        <option> Parafernalia </option>
                        <option> Semillas </option>
                        <option> MateriaPrima </option>
                    </select>
                </p>
                <p> Destacar <input type="checkbox"/> </p>
                <p> Detalles <input type="text"/></p>
                <p> Precio <input type="number"/></p>
                <p> imagen <input type="text"/></p>
                <p> Stock <input type="number"/></p>

            </div>
            <div>
                <h1> Enviar a la papelera de reciclaje</h1>
                <p> Nombre del producto <input type="text"/></p>
                <button> Papelera </button>
            </div>
            <button>Stock</button>
        </div>
        <div className={style.usuarios}>
            <h1>Manejos de usuarios</h1>
            <p>- Banear a un usuario</p>
            <p>- Borrar usuarios</p>
            <p></p>
        </div>
    </div>
  )
}

export default Dashboard;
import axios from 'axios'
import {
    GET_PRODUCTS
} from "./actionsType";

export const addUser = (userData)=>{
    console.log('action',userData);
    return async function(){
       await axios.post('http://localhost:3001/user', userData)
    }
}

export const getProduct = () => {
    return async function (dispatch) {
        const serverData = await axios.get("http://localhost:3001/products");
        const products = serverData.data;
        dispatch({ type: GET_PRODUCTS, payload: products})
    }
}
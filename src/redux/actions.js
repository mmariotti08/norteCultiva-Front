import axios from 'axios'

export const addUser = (userData)=>{
    console.log('action',userData);
    return async function(){
       await axios.post('http://localhost:3001/user', userData)
    }
}
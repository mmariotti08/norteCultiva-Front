import {
    GET_PRODUCTS
} from "./actionsType";

const initialState = {
    products: [],
    users: []
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            const newState = {...state, products: action.payload}
            return newState;
            
        default:
            return {...state};
    }
};

export default reducer;
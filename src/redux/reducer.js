import {
    GET_PRODUCTS
} from "./actionsType";

const initialState = {
    Jardineria: [],
    Parafernalia: [],
    Semillas: [],
    MateriPrima: [],
    products: [],
    users: []
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return {...state, products: action.payload };
            
            
        default:
            return {...state};
    }
};

export default reducer;
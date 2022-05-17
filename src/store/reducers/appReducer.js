import { combineReducers } from 'redux'

const initial_state = {
    loading: false,
    homeLoading: false,
    category: [],
    products: [],
    cart: [],
}

const appReducer = (state = initial_state, action) => {
    switch(action.type){
        case 'APP_LOADING': 
            return {
                ...state,
                loading: action.payload,
                homeLoading: action.payload,
        }
        case 'APP_HOME_LOADING': 
            return {
                ...state,
                homeLoading: action.payload
        }
        case 'APP_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        case 'APP_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'APP_CART':
            return {
                ...state,
                cart: action.payload
            }
        default: 
            return state
        
    }
}

const rootReducer = combineReducers({ appReducer })

export default rootReducer
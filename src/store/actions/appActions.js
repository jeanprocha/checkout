import { API } from '../../api'
import axios from 'axios'

export const appLoading = (payload) => {
    return {
        type: 'APP_LOADING',
        payload: payload
    }
}
export const appHomeLoading = (payload) => {
    return {
        type: 'APP_HOME_LOADING',
        payload: payload
    }
}

export const appCategory = (payload) => {
    return {
        type: 'APP_CATEGORY',
        payload: payload
    }
}

export const appProducts = (payload) => {
    return {
        type: 'APP_PRODUCTS',
        payload: payload
    }
}

export const appCart = ({ item, list }) => {
    list.push(item)
    return {
        type: 'APP_CART',
        payload: list
    }
}

export const appAddCart = ({ item, list, index }) => {
    var newObject = JSON.parse(JSON.stringify(item));

    newObject.index = index
    list.push(newObject)
    
    return {
        type: 'APP_CART',
        payload: list
    }
}

export const appRemoveCart = () => {
    return {
        type: 'APP_CART',
        payload: []
    }
}

export const appRemoveItemCart = ({ item , list }) => {
    list = list.filter(itemFilter => itemFilter.index !== item.index )
    return {
        type: 'APP_CART',
        payload: list
    }
}

export const appGetProducts = (category) => dispatch => {
    dispatch(appHomeLoading(false))

    axios.get(`${API}/category/${category}`)
        .then(response => {
            dispatch(appProducts(response.data))
        })
        .catch(err => console.log(err.response))
        .finally(() => dispatch(appLoading(true)))
}

export const appInitialApi = () => dispatch => {
    axios.get(`${API}/categories`)
        .then(response => {
            dispatch(appCategory(response.data))
            dispatch(appGetProducts(response.data[0]))
        })
        .catch(err => console.log(err.response))
}
// const { createStore, combineReducers } = require('redux') for multiple reducer
const { createStore, applyMiddleware } = require('redux')
const { default: logger } = require('redux-logger')


const ADD_PRODUCT = "ADD_PRODUCT"
const GET_PRODUCT = "GET_PRODUCT"

// const ADD_CART_ITEM = "ADD_CART_ITEM"
// const GET_CART = "GET_CART"

// product state
const initialProductState ={
    products:["salt", "apple"],
    numberOfProducts:2
}

// cart state
// const initialCartState ={
//     cart:["salt"],
//     numberOfProducts:1
// }

//product action
const get_products = ()=> {
    return{
        type: GET_PRODUCT
    }
}

const add_products = (product)=> {
    return{
        type: ADD_PRODUCT,
        payload: product
    }
}

// cart action
// const get_cart = ()=> {
//     return{
//         type: GET_CART
//     }
// }

// const add_cart = (product)=> {
//     return{
//         type: ADD_CART_ITEM,
//         payload: product
//     }
// }


const productReducer = (state=initialProductState, action)=>{
        switch (action.type) {

            case GET_PRODUCT:
                
                return{
                    ... state
                };
    
            case ADD_PRODUCT:
                
                return{
                    products: [... state.products, action.payload],
                    numberOfProducts: state.numberOfProducts + 1
                };
        
            default:
               return state;
        }
}

// const cartReducer = (state= initialCartState, action)=>{
//         switch (action.type) {

//             case GET_CART:
                
//                 return{
//                     ... state
//                 };
    
//             case ADD_CART_ITEM:
                
//                 return{
//                     cart: [... state.cart, action.payload],
//                     numberOfProducts: state.numberOfProducts + 1
//                 };
        
//             default:
//                return state;
//         }
// }


 // for multiple reducer combination
// const rootReducer = combineReducers({
//     productRe: productReducer,
//     cartRe: cartReducer
// })


const store = createStore(productReducer, applyMiddleware(logger))

store.subscribe(()=>{
    console.log(store.getState())
})



// store.dispatch(get_cart())
// store.dispatch(add_cart("bithy angle"))


store.dispatch(get_products())
store.dispatch(add_products("bithy"))
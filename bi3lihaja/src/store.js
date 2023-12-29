import { createStore,combineReducers,applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { productListReducer ,productDetailReducer} from './reducer/productReducres'
import { userLoginReducer } from './reducer/userReducers'
import { userRegisterReducer } from './reducer/userReducers'
import { userDetailsReducer } from './reducer/userReducers'
import { cartReducers } from './reducer/CartReducers'



const reducer = combineReducers({

    productList: productListReducer,
    productDetails: productDetailReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    cart:cartReducers,

    
})

const cartItemFromStorage = localStorage.getItem('cartItems') ?
   JSON.parse(localStorage.getItem('cartItems')):[]


const userInfoFromStorage = localStorage.getItem('userInfo') ?
   JSON.parse(localStorage.getItem('userInfo')):null


const shippingAdressFromStorage = localStorage.getItem('shippingAdress') ?
   JSON.parse(localStorage.getItem('shippingAdress')):null


const payementMethodFromStorage = localStorage.getItem('shippingAdress') ?
   JSON.parse(localStorage.getItem('payementMethod')):null


const initalState = {
    
     cart:

     {  
         cartItems:cartItemFromStorage,
         shippingAdress:shippingAdressFromStorage,
         payementMethod:payementMethodFromStorage

     },


   userLogin :{userInfo:userInfoFromStorage}

}

const middleware = [thunk]

const store = createStore(reducer,initalState,composeWithDevTools(applyMiddleware(...middleware)))

export default store






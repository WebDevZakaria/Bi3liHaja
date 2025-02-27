import { createStore,combineReducers,applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { productListReducer ,productDetailReducer} from './reducer/productReducres'
import { userLoginReducer } from './reducer/userReducers'

import { userRegisterReducer } from './reducer/userReducers'
import { userDetailsReducer } from './reducer/userReducers'
import { cartReducers } from './reducer/CartReducers'

import { orderCreateReducer } from './reducer/orderReducer'
import { orderListMyReducer } from './reducer/orderReducer'

import { productListMyReducer } from './reducer/userReducers'
import { productAddReducer } from './reducer/productReducres'
import { userListReducer } from './reducer/userReducers'

import { productTopRatedReducer } from './reducer/productReducres'

import { productAllReducer} from './reducer/productReducres'




const reducer = combineReducers({

    productList: productListReducer,
    productDetails: productDetailReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    cart:cartReducers,
    orderCreate:orderCreateReducer,
    orderListMy:orderListMyReducer,
    ProductListMy:productListMyReducer,
    productAdd:productAddReducer,
    userList:userListReducer,
    productTopRated:productTopRatedReducer,
    productAll:productAllReducer,

})



const cartItemFromStorage = localStorage.getItem('cartItems') ?
   JSON.parse(localStorage.getItem('cartItems')):[]


const userInfoFromStorage = localStorage.getItem('userInfo') ?
   JSON.parse(localStorage.getItem('userInfo')):null


const shippingAdressFromStorage = localStorage.getItem('shippingAdress') ?
   JSON.parse(localStorage.getItem('shippingAdress')):null
   


const initalState = {
    
     cart:

     {  
         cartItems:cartItemFromStorage,
         shippingAdress:shippingAdressFromStorage,

     },


   userLogin :{userInfo:userInfoFromStorage}

}

const middleware = [thunk]

const store = createStore(reducer,initalState,composeWithDevTools(applyMiddleware(...middleware)))

export default store






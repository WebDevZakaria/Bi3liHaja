import { USER_LOGIN_REQUEST} from "../constants/userConstants";
import { USER_LOGIN_SUCCESS } from "../constants/userConstants";
import { USER_LOGIN_FAIL } from "../constants/userConstants";
import { USER_LOGOUT } from "../constants/userConstants";
import { USER_REGISTER_REQUEST } from "../constants/userConstants";
import { USER_REGISTER_SUCCESS } from "../constants/userConstants";
import { USER_REGISTER_FAIL } from "../constants/userConstants";

import { USER_DETAILS_REQUEST } from "../constants/userConstants";
import { USER_DETAILS_SUCCESS } from "../constants/userConstants";
import { USER_DETAILS_FAIL } from "../constants/userConstants";


import { PRODUCT_LIST_MY_REQUEST,PRODUCT_LIST_MY_FAIL,PRODUCT_LIST_MY_RESET,PRODUCT_LIST_MY_SUCCESS } from "../constants/userConstants";
import { USER_LIST_REQUEST,USER_LIST_SUCCESS,USER_LIST_FAIL } from "../constants/userConstants";


export const userLoginReducer =(state = {userToken :{}},action) =>{
    
    switch(action.type){

        case USER_LOGIN_REQUEST:

            return {

                loading:true

            }

        case USER_LOGIN_SUCCESS:

                return {
                    
                    loading:false,
                    userInfo:action.payload,

                }
                
        case USER_LOGIN_FAIL:
            
                return {

                   loading:false,error:action.payload

                    }
                    
        case USER_LOGOUT:

            return {

            }       

        default: 
                      return state  
        
    }

}


export const userRegisterReducer = (state={},action)=>{

    switch(action.type){
        
        case  USER_REGISTER_REQUEST:

        return {
            loading :true
        }

        case USER_REGISTER_SUCCESS:

        return {

            loading:false,userInfo:action.payload
            
        }

        case USER_REGISTER_FAIL:

            return {

               loading:false,error:action.payload

                }


    case USER_LOGOUT:

        return {
            
        }       
    default: 
                  return state  

    }

}

export const userDetailsReducer = (state={ user: [] },action)=>{

    switch(action.type){

        case  USER_DETAILS_REQUEST:

           return {

            ...state,
            loading :true

           }

        case USER_DETAILS_SUCCESS:

             return{
               loading:false,
               user:action.payload
            }
    
        case USER_DETAILS_FAIL:

            return {

               loading:false,
               error:action.payload

                }
        default: 
                  return state  

    }

}




export const  productListMyReducer=(state = {product:[]},action)=>{

    switch(action.type){

        case PRODUCT_LIST_MY_REQUEST:

            return {
                loading:true
            }

        case PRODUCT_LIST_MY_SUCCESS:

            return {
                loading:false,
                product:action.payload    
            }


        case PRODUCT_LIST_MY_FAIL:
            return {
                loading:false,
                error:action.payload

            }

        case PRODUCT_LIST_MY_RESET:
            return {  
                product:[]
            }
            
        default:
          return state
    }
}




export const userListReducer =(state = {users:[]},action) =>{
    
    switch(action.type){

        case USER_LIST_REQUEST:

            return {

                loading:true,
                users:[]

            }

        case USER_LIST_SUCCESS:
            
                return {
                    loading:false,
                    users:action.payload,
                    
                }
                
        case USER_LIST_FAIL:
                return {
                   loading:false,error:action.payload
                    }

        
                    
        default: 
                      return state
        
    }

}






/*
export const userListReducer = (state = { users: [] }, action) => {
      
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true }

        case USER_LIST_SUCCESS:
            return { loading: false, users: action.payload }

        case USER_LIST_FAIL:
            return { loading: false, error: action.payload }

        case USER_LIST_RESET:
            return { users: []
            }

        default:
            return state
    }
}

export const userDeleteReducer = (state = { }, action) => {

    switch (action.type) {

        case USER_DELETE_REQUEST:

            return { loading: true }

        case USER_DELETE_SUCCESS:
            return { loading: false, 
                success:true }

        case USER_DELETE_FAIL:
            return { loading: false, error: action.payload }

     
        default:
            return state
    }
}


export const userUpdateReducer = (state = { user:{} }, action) => {

    switch (action.type) {

        case USER_UPDATE_REQUEST:

            return { loading: true }

        case USER_UPDATE_SUCCESS:

            return { loading: false, success: true }
            
        case USER_UPDATE_FAIL:

            return { loading: false, error: action.payload }
        case USER_UPDATE_RESET:
            return { user: {} }
        default:
            return state
    }
}
*/




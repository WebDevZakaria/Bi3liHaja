
import { PROUDUCT_LIST_FAIL,PROUDUCT_LIST_REQUEST,PROUDUCT_LIST_SUCCESS } from "../constants/productConstants"
import { PROUDUCT_DETAILS_FAIL } from "../constants/productConstants"

import { PROUDUCT_DETAILS_REQUEST } from "../constants/productConstants"
import { PROUDUCT_DETAILS_SUCCESS } from "../constants/productConstants"

import { PRODUCT_ADD_SUCCESS,PRODUCT_ADD_REQUEST,PRODUCT_ADD_FAIL } from "../constants/productConstants"

import { PRODUCT_TOP_REQUEST ,PRODUCT_TOP_FAIL,PRODUCT_TOP_SUCCESS} from "../constants/productConstants"

import { PRODUCT_ALL_REQUEST ,PRODUCT_ALL_FAIL,PRODUCT_ALL_SUCCESS} from "../constants/productConstants"


export const productListReducer =(state = {products:[]},action) =>{
    
    switch(action.type){

        case PROUDUCT_LIST_REQUEST:

            return {

                loading:true,
                products:[]

            }

        case PROUDUCT_LIST_SUCCESS:
            
                return {
                    loading:false,
                    products:action.payload,
                    
                }
                
        case PROUDUCT_LIST_FAIL:
                return {
                   loading:false,error:action.payload
                    }

        
                    
        default: 
                      return state
        
    }

}



export const productAllReducer =(state = {products:[]},action) =>{
    
    switch(action.type){

        case PRODUCT_ALL_REQUEST:

            return {

                loading:true,
                products:[]

            }

        case PRODUCT_ALL_SUCCESS:
            
                return {
                    loading:false,
                    products:action.payload,
                    
                }
                
        case PRODUCT_ALL_FAIL:
                return {
                   loading:false,error:action.payload
                    }

        
                    
        default: 
                      return state
        
    }

}
















export const productTopRatedReducer =(state = {products:[]},action) =>{

    switch(action.type){

        case PRODUCT_TOP_REQUEST:

            return {

                loading:true,
                products:[]
            }

        case PRODUCT_TOP_SUCCESS:

                return {
                    loading:false,
                    products:action.payload
                }
                
        case PRODUCT_TOP_FAIL:
        
                return {
                    loading:false,
                    error:action.payload
                }  
            
        default: 

                  return state

    }

}



























export const productDetailReducer =(state = {product:{reviews:[]} },action) =>{


    switch(action.type){

        case PROUDUCT_DETAILS_REQUEST:

            return {

                loading:true,...state

            }

        case PROUDUCT_DETAILS_SUCCESS:
                return {
                    loading:false,product:action.payload
    
                }
                

        case PROUDUCT_DETAILS_FAIL:

                return {loading:false,error:action.payload}
                    
        default: 
                      return state
        
    }

}




export const productAddReducer = (state={},action)=>{

    switch(action.type){
        
        case  PRODUCT_ADD_REQUEST:

        return {
            loading :true
        }

        case PRODUCT_ADD_SUCCESS:

        return {

            loading:false,
            success:true,
            product:action.payload        }

        case PRODUCT_ADD_FAIL:

            return {

               loading:false,error:action.payload

                }
       
    default: 
                  return state  

    }

}


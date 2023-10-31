import { PROUDUCT_LIST_SUCCESS } from "../constants/productConstants"
import { PROUDUCT_LIST_REQUEST } from "../constants/productConstants"
import { PROUDUCT_LIST_FAIL } from "../constants/productConstants"
import { PROUDUCT_DETAILS_FAIL } from "../constants/productConstants"
import { PROUDUCT_DETAILS_REQUEST } from "../constants/productConstants"
import { PROUDUCT_DETAILS_SUCCESS } from "../constants/productConstants"


import axios from "axios"




export const listProducts =() => async(dispatch) => {
    
    try{
    
        dispatch({type:PROUDUCT_LIST_REQUEST})
    
        const { data } = await axios.get('/api/products/')

        
        dispatch({type:PROUDUCT_LIST_SUCCESS,payload:data})
        
    } 
    
    
    catch(error){
    
        dispatch({type:PROUDUCT_LIST_FAIL,payload:error.response && error.response.data.detail 
            ? error.response.data.detail
            : error.message,
        })
    
    }
    }



    
export const listProductDetails =(id) => async(dispatch) => {

    try{

        dispatch({type:PROUDUCT_DETAILS_REQUEST})
        const {data } = await axios.get(`/api/products/${id}`)

        dispatch({type:PROUDUCT_DETAILS_SUCCESS,payload:data})
    
    } 
    
    catch(error){

        dispatch({type:PROUDUCT_DETAILS_FAIL,payload:error.response && error.response.data.detail 
            ? error.response.data.detail
            : error.message,
    
        })
    }
    }

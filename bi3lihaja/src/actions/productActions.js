import { PROUDUCT_LIST_SUCCESS } from "../constants/productConstants"
import { PROUDUCT_LIST_REQUEST } from "../constants/productConstants"
import { PROUDUCT_LIST_FAIL } from "../constants/productConstants"
import { PROUDUCT_DETAILS_FAIL } from "../constants/productConstants"
import { PROUDUCT_DETAILS_REQUEST } from "../constants/productConstants"
import { PROUDUCT_DETAILS_SUCCESS } from "../constants/productConstants"
import { PRODUCT_ADD_SUCCESS,PRODUCT_ADD_REQUEST,PRODUCT_ADD_FAIL } from "../constants/productConstants"


import { PRODUCT_TOP_REQUEST ,PRODUCT_TOP_FAIL,PRODUCT_TOP_SUCCESS} from "../constants/productConstants"

import { PRODUCT_ALL_REQUEST ,PRODUCT_ALL_FAIL,PRODUCT_ALL_SUCCESS} from "../constants/productConstants"

import axios from "axios"




export const listProducts =(keyword = '') => async(dispatch) => {
    
    try{
    
        dispatch({type:PROUDUCT_LIST_REQUEST})
    
        const {  data } = await axios.get(`/api/products/${keyword}`)

        
        dispatch({type:PROUDUCT_LIST_SUCCESS,payload:data})
        
    } 
    
    
    catch(error){
    
        dispatch({type:PROUDUCT_LIST_FAIL,payload:error.response && error.response.data.detail 
            ? error.response.data.detail
            : error.message,
        })
    
    }
    }




    export const AllProducts =() => async(dispatch) => {
    
        try{
        
            dispatch({type:PRODUCT_ALL_REQUEST})
        
            const {  data } = await axios.get('/api/products/allproducts/')
    
            
            dispatch({type:PRODUCT_ALL_SUCCESS,payload:data})
            
        } 
        
        
        catch(error){
        
            dispatch({type:PRODUCT_ALL_FAIL,payload:error.response && error.response.data.detail 
                ? error.response.data.detail
                : error.message,
            })
        
        }
        }



    export const listTopProducts =() => async(dispatch) => {
    
        try{
        
            dispatch({type:PRODUCT_TOP_REQUEST})
        
            const {data } = await axios.get(`/api/products/top/`)
            
            dispatch({type:PRODUCT_TOP_SUCCESS,payload:data})
            
        } 
        
        
        catch(error){
        
            dispatch({type:PRODUCT_TOP_FAIL,payload:error.response && error.response.data.detail 
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
 

        export const addproduct = (name,brand,category,description,wilaya,yourAdresss,price) => async(dispatch,getState)=> 

        {
        
            try{
        
                dispatch({type:PRODUCT_ADD_REQUEST})
                
                const
        
                { 
        
                    userLogin :{ userInfo },
        
               } = getState()
               
        
                const config = {
        
                    headers: { 
                        
                        'Content-Type': 'application/json',
        
                        'Authorization': 'Bearer ' + userInfo.token
        
                    },
        
                    data : {},
        
                };
                
                axios.post('/api/products/addproduct/'

               ,{'name':name,'brand':brand,'category':category,'description':description,'wilaya':wilaya,'yourAdresss':yourAdresss,'price':price},config).then(response=>{
        
                    dispatch({type:PRODUCT_ADD_SUCCESS,payload:response.data})
        
                })
                        
            }
            
            catch(error){    
        
                dispatch({
                    
                    type:PRODUCT_ADD_FAIL,payload:error.response && error.response.data.detail 
                    ? error.response.data.detail
                    : error.message,
        
                })
        
            }
        
            }
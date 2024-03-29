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

import axios from "axios";

export const login = (email,password) => async(dispatch)=> 
{
    try{

        dispatch({type:USER_LOGIN_REQUEST})

        const config = {
            headres:{
                'Content-type':'application/json'
            }
        }

        const {data } = await axios.post('/api/users/login/'
        ,{'email':email,'password':password},config)

        dispatch({type:USER_LOGIN_SUCCESS,payload:data})
        
        localStorage.setItem('userInfo',JSON.stringify(data))

    }

    catch(error){

        dispatch({type:USER_LOGIN_FAIL,payload:error.response && error.response.data.detail 
            ? error.response.data.detail
            : error.message,
    
        })
    }
    }


   export const logout = ()=>(dispatch)=>{

    localStorage.removeItem('userInfo')
        
    }
  



    export const register = (name,lastname,email,phonenumber,wilaya,password) => async(dispatch)=> 

    {
        try{
    
            dispatch({type:USER_REGISTER_REQUEST})
    
            const config = {
                headres:{
                    'Content-type':'application/json'
                }
            }
    
            const {data } = await axios.post('/api/users/register/'

            ,{'name':name,'lastname':lastname,'email':email,'phonenumber':phonenumber,'wilaya':wilaya,'password':password},config)

            dispatch({type:USER_REGISTER_SUCCESS,payload:data})
            
            dispatch({type:USER_LOGIN_SUCCESS,payload:data})
             
            localStorage.setItem('userInfo',JSON.stringify(data))
    
        }
    
        catch(error){
    
            dispatch({type:USER_REGISTER_FAIL,payload:error.response && error.response.data.detail 
                ? error.response.data.detail
                : error.message,
        
            })
        }

        }

        export const getUserDetails = (id) => async(dispatch,getState)=> 

    {
        try{
    
            dispatch({type:USER_DETAILS_REQUEST})

            const { 
                userLogin :{ userInfo },
           } = getState()



            const config = {
                method: 'get',
                url:  `/api/users/${id}/`,
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userInfo.token
                },
                    data : {},
            };
            const { data } = await axios(config);

           

            dispatch({type:USER_DETAILS_SUCCESS,payload:data})    
        }

        
        catch(error){    

            dispatch({type:USER_DETAILS_FAIL,payload:error.response && error.response.data.detail 
                ? error.response.data.detail
                : error.message,
    
            })
        }
        }



        export const ListMyProduct = () => async(dispatch,getState)=> 

        {
        
            try{
        
                dispatch({type:PRODUCT_LIST_MY_REQUEST})
                
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
                
                axios.get(`/api/users/allproduct/`,config).then(response=>{
                    
                    dispatch({type:PRODUCT_LIST_MY_SUCCESS,payload:response.data})
        
                })
                
            }


            catch(error){    
        
                dispatch({
                    
                    type:PRODUCT_LIST_MY_FAIL,payload:error.response && error.response.data.detail 
                    ? error.response.data.detail
                    : error.message,
        
                })
        
            }
        
            }



            export const listUsers =() => async(dispatch) => {
    
                try{
                
                    dispatch({type:USER_LIST_REQUEST})
                
                    const { data } = await axios.get('/api/users/allusers/')
            
                    
                    dispatch({type:USER_LIST_SUCCESS,payload:data})
                    
                } 
                
                
                catch(error){
                
                    dispatch({type:USER_LIST_FAIL,payload:error.response && error.response.data.detail 
                        ? error.response.data.detail
                        : error.message,
                    })
                
                }
                }
            


































/*
        export const resetPassowrd = (email) => async dispatch =>{
            const config = {
                headres:{
                    'Content-type':'application/json'
                }
            }        
            const body = JSON.stringify({email})
            try{
                const {data} = await axios.post('auth/users/reset_password/',body,config)
                dispatch({
                    type:PASSWORD_RESET_SUCCESS,payload:data
                })

            } catch(error){

                dispatch({type:PASSWORD_RESET_FAIL,payload:error.response && error.response.data.detail 
                    ? error.response.data.detail
                    : error.message,
            
                })
            }
        }


        export const reset_password_confirm = (uid,token,new_password,re_new_password)=>async dispatch =>{
            const config = {
                headres:{
                    'Content-type':'application/json'
                }
            }  

            const body = JSON.stringify({uid,token,new_password,re_new_password})
            try{
                const {data} = await axios.post('auth/users/reset_password_confirm/',body,config)
                dispatch({
                    type:PASSWORD_RESET_CONFIRM_SUCCESS,payload:data
                })

            } catch(error){

                dispatch({type:PASSWORD_RESET_CONFIRM_FAIL,payload:error.response && error.response.data.detail 
                    ? error.response.data.detail
                    : error.message,
            
                })
            }

        }



    
    export const listUsers = () => async(dispatch,getState)=> 

    {
        try{
    
            dispatch({type:USER_LIST_REQUEST})

            const { 
                userLogin :{ userInfo },
           } = getState()
    
            

            const config = {
                method: 'get',
                url:   `/api/users/`,
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userInfo.token
                },
                    data : {},

            };

            const { data } = await axios(config);

            dispatch({type:USER_LIST_SUCCESS,payload:data})
    
        }

        catch(error){    
            
            dispatch({type:USER_LIST_FAIL,payload:error.response && error.response.data.detail 
                ? error.response.data.detail
                : error.message,
            })
        }
        }
        





        export const deleteUser = (id) => async(dispatch,getState)=> 
        {
            try{
        
                dispatch({type:USER_DELETE_REQUEST})

                const { 
                    userLogin :{ userInfo },
               } = getState()
        
                
    
                const config = {
                    method: 'delete',
                    url:   `/api/users/delete/${id}`,
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + userInfo.token
                    },
                        data : {},
    
                };
    
                const { data } = await axios(config);
    
                dispatch({type:USER_DELETE_SUCCESS,payload:data})
        
            }
    
            catch(error){    
                
                dispatch({type:USER_DELETE_FAIL,payload:error.response && error.response.data.detail 
                    ? error.response.data.detail
                    : error.message,
                })
            }
            }


           

        export const updateUser = (user) => async(dispatch,getState)=> 
        
        {

            try{

                dispatch({type:USER_UPDATE_REQUEST})
                
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

                axios.put(`/api/users/update/${user._id}`,user,config).then(response=>{

                    dispatch({type:USER_UPDATE_SUCCESS,payload:response.data})
                    
                })

            }
            
            catch(error){    

                dispatch({
                    
                    type:USER_UPDATE_FAIL,payload:error.response && error.response.data.detail 
                    ? error.response.data.detail
                    : error.message,

                })

            }

            }

*/
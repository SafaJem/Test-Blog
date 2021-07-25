import axios from 'axios';
import {
    USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    AUTH_ERRORS
   } from '../constants/ActionTypes'

const loadingUser=()=>(dispatch)=>{
    dispatch(
        {
            type:USER_LOADING,
        }
    );
}

const authErrors=(error)=>(dispatch)=>{
    const {errors,msg}= error.response.data
if (Array.isArray(errors)){
    errors.forEach((el) => alert(el.msg));
}
if(msg){
    alert(msg);
}
    dispatch(
        {
            type:AUTH_ERRORS,
        }
    );
}  

export const registerUser=(formData)=>async (dispatch) =>{
    dispatch(loadingUser());
try{
const res= await axios.post('/api/user/register',formData);
dispatch({
    type:REGISTER_USER,
    payload:res.data
});
}
catch (err){
    console.dir(err);
    dispatch(authErrors(err));
}
}   

export const loginUser=(formData)=>async (dispatch) =>{
    dispatch(loadingUser());
    try{
    const res= await axios.post('/api/user/login',formData);
    dispatch({
        type:LOGIN_USER,
        payload:res.data
    });
    }
    catch (err){
    console.dir(err);
    dispatch(authErrors(err));
    }
    }   

    export const getAuthUser=()=>async (dispatch) =>{
        dispatch(loadingUser());
        try{
        const config={
            headers:{
                'x-auth-token':localStorage.getItem('token')
            }
        }

        const res= await axios.get('/api/user/auth',config);
        dispatch({
            type:GET_AUTH_USER,
            payload:res.data
        });
        }
        catch (err){
        console.log(err);
        dispatch({
            type: AUTH_ERRORS,
          });
        }
        } 
        
    export const logout=()=>(dispatch)=>{
        dispatch(
            {
                type:LOGOUT_USER,
            }
        );
    }  

    
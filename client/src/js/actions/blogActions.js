import axios from 'axios'
import { GET_BLOG } from '../constants/ActionTypes'
// Add blog
export const addBlog=(formData)=>async (dispatch) =>{
    try{
      const config = {
        headers: {
          'Content-Type': 'application/json',
         'x-auth-token': localStorage.getItem('token'),
        },
      };
        
    const res= await axios.post('/api/blog/Addblog',formData,config);
    dispatch(getBlogs());
    }
    catch (err){
        console.dir(err);
        }
    }  
// Get all blogs
    export const getBlogs=()=>async (dispatch) =>{
        try{
        const res= await axios.get('/api/blog/');
        dispatch({
            type:GET_BLOG,
            payload:res.data
        });
        }
        catch (err){
            console.dir(err);
            }
        }   
        
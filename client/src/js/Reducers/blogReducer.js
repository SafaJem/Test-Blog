import { GET_BLOG } from '../constants/ActionTypes'


const initialState= {blogs:[] ,}


    const blogReducer  =(state=initialState,{type,payload})=>{
        switch(type){ 
            case GET_BLOG :
              
                     return{
                       ...state,
                       blogs : payload};

            default:
                     return state;
                     }}
 export default blogReducer
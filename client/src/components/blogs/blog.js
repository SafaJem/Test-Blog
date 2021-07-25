import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams,Link} from "react-router-dom"
import { getBlogs } from "../../js/actions/blogActions";
import {
     Button
  } from 'reactstrap';
const Blog=()=>{
    const {title}=useParams()
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getBlogs());
    }, []);
    const blogs = useSelector((state) => state.blogReducer.blogs.blogs);
    return(
         <div class="card mb-3">
        <img src={blogs.find(el=>el.title===title).image} class="card-img-top" alt="blog" />
        <div class="card-body">
          <p style={{fontSize: "calc(8px + 2vmin)"}} class="card-text">{blogs.find(el=>el.title===title).metaDescription}</p>
          <iframe title="BLOG" width="853" height="480" src={blogs.find(el=>el.title===title).video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p style={{fontSize: "calc(8px + 2vmin)"}} class="card-text">{blogs.find(el=>el.title===title).text}</p>
            <Button className="Modal-btn"  onClick={(e)=>e.preventDefault()}>
             <Link style={{textDecoration:'none', color:'black'}} to='/'>Back</Link>
            </Button>
          <p class="card-text"><small class="text-muted">{blogs.find(el=>el.title===title).date.slice(0, 10)} ---{" "} {blogs.find(el=>el.title===title).date.slice(11, 19)}</small></p>
        </div>
      </div>
        
        
    );
}
export default Blog;


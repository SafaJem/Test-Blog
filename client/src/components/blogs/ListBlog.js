import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../js/actions/blogActions";
import Cardblog from "./Card";
const ListBlog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const blogs = useSelector((state) => state.blogReducer.blogs.blogs);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      {blogs &&
        blogs.map((blog) => (
          <Cardblog key={blog._id} blog={blog} />
        ))}
    </div>
  );
};

export default ListBlog;
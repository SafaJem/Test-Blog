import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { addBlog } from '../../js/actions/blogActions';
const AddForm=()=>{
 const [title,setTitle]=useState('')
 const [text, setText] = useState("");
 const [video, setVideo] = useState("");
 const [image, setImage] = useState("");
 const [metaDescription, setMetaDescription] = useState("");
 const [cancel,setCancel]=useState(false)
const dispatch=useDispatch()
const add=()=>
{
    dispatch(addBlog({metaDescription,title,image,text,video}));
    setCancel(!cancel);

}
return(
    <>
    {cancel?
    (<Redirect to='/'/>)
    :(<div style={{ margin: "100px" }}>
    <Form>
      <FormGroup>
        <Label for="exampleTitle">Title</Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="title"
          name="title"
          id="exampletitle"
          placeholder="Enter your title"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampletext">Text</Label>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter your text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplevideo">Video</Label>
        <Input
          value={video}
          onChange={(e) => setVideo(e.target.value)}
          type="url"
          placeholder="Enter your video"
        />
      </FormGroup>
     
      <FormGroup>
        <Label for="exampleimage">Image</Label>
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="url"
          placeholder="Enter your image"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampletext">Meta Description</Label>
        <Input
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          type="text"
          placeholder="Enter your description"
        />
      </FormGroup>
      <Button onClick={add}>Add a Blog</Button>
      <Button onClick={()=>setCancel(!cancel)}>Cancel</Button>

    </Form>
  </div>)}
  </>
)
}

export default AddForm
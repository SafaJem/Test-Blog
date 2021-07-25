import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from 'react-router-dom'

const Cardblog=({blog})=>{

return(
<div style={{ minWidth: "300px", margin: "60px" }}>
      <Card
        body
        inverse
        style={{  borderColor: "#333" }}
      >         
     <CardTitle style={{ color:'black'}} tag="h5">{blog.title}</CardTitle>
      <CardImg style={{width:'600px',height:'300px'}} src={blog.image} alt="Card image cap" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{blog.metaDescription}</CardSubtitle>
          <Button><Link style={{ color:'white'}} to={`/blog/${blog.title}`}>See More</Link></Button>
<CardText style={{ color:'black'}}>Créér par {blog.nameUser}</CardText>
  </CardBody>
      </Card>
      
</div>
)
}

export default Cardblog


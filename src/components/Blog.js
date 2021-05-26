import React from 'react'
import fetch from 'isomorphic-fetch';
import PostTarjet from './PostTarjet.jsx';

class Blog extends React.Component{

  constructor(){
    super();
    this.state = {
      blogs:[]
    }
  }

  componentWillMount(){
    fetch('http://localhost:1337/posts/')
    .then((response)=>{
      if(response.status>=400){
        throw new Error('bad response from server');
      }
      return response.json();
    })
    .then((productos)=>{
      this.setState({blogs:productos})
    })
  }


  render(){
    return(
      <div className="container p-0" id="cuerpo-blogs">
          {console.log(this.state.blogs[0])}
        <h1 className="titulo display-1 text-center mt-5"> Posts </h1>
        <div className="row mt-5">

          {
            this.state.blogs.map((post)=>{
              console.log(post.id)
            return <PostTarjet titulo={post.titulo} imagenUrl={`http://localhost:1337${post.image.url}`} id={post.id}/>            
              
            })
          }   
        </div>
    </div>
    )
  }
}



export default Blog

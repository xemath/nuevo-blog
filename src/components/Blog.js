import React from 'react'
import PostTarjet from './PostTarjet.jsx';

class Blog extends React.Component{

  



  render(){
    return(
      <div className="container p-0" id="cuerpo-blogs">
          
        <h1 className="titulo display-1 text-center mt-5"> Posts </h1>
        <div className="row mt-5">

          
           <PostTarjet
            titulo="Presentacion!"
            imagenUrl="images/fondo.jpg"
            id="1"/>            
              
           
        </div>
    </div>
    )
  }
}



export default Blog

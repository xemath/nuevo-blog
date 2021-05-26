import React from 'react';
import ProyectoTarjeta from './ProyectoTarjeta';
import fetch from 'isomorphic-fetch';
class Projects extends React.Component{
  
  constructor(){
    super();
    this.state = {
      proyectos:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:1337/proyectos/')
    .then((response)=>{
      if(response.status >= 400){
        throw new Error('algo malo ha pasado papa');
      }
      return response.json();
    })
    .then((proyectos)=>{
      this.setState({proyectos:proyectos})
    })
  }  
  
  render(){
    return(
      <div className="container p-0" id="cuerpo-blogs">
        <h1 className="titulo display-1 text-center mt-5"> Proyectos </h1>
        <div className="row mt-5">
          {
            this.state.proyectos.map((proyecto)=>{
              console.log(proyecto.linkProyecto)
              return <ProyectoTarjeta titulo={`${proyecto.Titulo}`} descripcion={`${proyecto.descripcion}`} urlImagen={`http://localhost:1337${proyecto.img[0].url}`}
              linkProyecto={`${proyecto.linkProyecto}`}
              linkGit={`${proyecto.linkGit}`}
              />
            })
          }
          
        </div>
    </div>
    )
  }
}


/*function Projects(){
    var periquitopinpin = [
      {
        titulo:'primer post',
        descripcion :'este es el primer post papi'
      },
      {
        titulo:'segundo post',
        descripcion :'este es el primer post papi'
      },
      {
        titulo:'tercer post',
        descripcion :'este es el primer post papi'
      },
      {
        titulo:'cuarto post',
        descripcion :'este es el primer post papi'
      }
    ]
    return(
        <div class="container p-0" id="cuerpo-blogs">
        <h1 class="titulo display-1 text-center mt-5"> Proyectos </h1>
        <div class="row mt-5">
          {
            periquitopinpin.map((e)=>{
            return <ProyectoTarjeta dato={e}/>
            })
          }
          
        </div>
    </div>
    )
} */

export default Projects;
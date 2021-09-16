import React from 'react';
import ProyectoTarjeta from './ProyectoTarjeta';


class Projects extends React.Component{

  // titulo - descripcion urlImagen, linkProyecto, linkGit
  render(){
    return(
      <div className="container p-0" id="cuerpo-blogs">
        <h1 className="titulo display-1 text-center mt-5"> Proyectos </h1>
        <div className="row mt-5">
        <ProyectoTarjeta
          titulo="Panel de Administracion HTML, CSS y Vanilla Javascript"
          descripcion="Simulacion de un panel de administracion con diseño responsivo"
          urlImagen="images/n1.png"
          linkProyecto="https://xemath.github.io/panel/"
          linkGit="https://github.com/xemath/panel/"
          />
          <ProyectoTarjeta
          titulo="Landing Page responsivo HTML, CSS, React"
          descripcion="Landing page Responsivo con temporizador y slider en React"
          urlImagen="images/n2.png"
          linkProyecto="https://kfc77.netlify.app/"
          linkGit="https://github.com/xemath/pagina-inicio-kfc"
          />
          <ProyectoTarjeta
          titulo="Landing Page responsivo HTML, CSS, React"
          descripcion="Landing page Responsivo con cambio de tema en React"
          urlImagen="images/n3.png"
          linkProyecto="https://starbucks77.netlify.app/"
          linkGit="https://github.com/xemath/pagina-inicio-starbucks"
          />
          <ProyectoTarjeta
          titulo="Pagina restaurante HTML, CSS, Vanilla Js"
          descripcion="Pagina para restaurante responsiva"
          urlImagen="images/n4.png"
          linkProyecto="https://restaurante77.netlify.app/"
          linkGit="https://github.com/xemath/pagina-restaurante"
          />
          <ProyectoTarjeta
          titulo="Aplicacion de encuestas"
          descripcion="Permite crear, guardar, ver y responder encuestas."
          urlImagen="images/p1.png"
          linkProyecto="https://encuestas-mongo.herokuapp.com/"
          linkGit="https://github.com/xemath/app-encuestas"
          />
          <ProyectoTarjeta
          titulo="Aplicacion de trivias"
          descripcion="permite responder preguntas de tipo 'preguntados' y clasificar los usuarios por tiempo y puntaje"
          urlImagen="images/p2.png"
          linkProyecto="https://preguntas-mysql.herokuapp.com/"
          linkGit="https://github.com/xemath/trivias-app"
          />
          <ProyectoTarjeta
          titulo="Blog en React con Bootstrap"
          descripcion="El blog que estas usando ahora mismo. hay una version con back end y contenido dinamico y otra vesion estatica"
          urlImagen="images/p3.png"
          linkProyecto="https://castro-blog.netlify.app/"
          linkGit="https://github.com/xemath/nuevo-blog"
          />
          
          

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
import React from 'react'
import {SocialIcon} from 'react-social-icons';

function ProyectoTarjeta({titulo, descripcion, urlImagen, linkProyecto, linkGit}) {
    
    return (
        <div className="col-sm-4 mb-3">
                <div className="card border-dark">
                  <img src={`${urlImagen}`} className="card-img-top" alt="..."/>
  
                  <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <a href={`${linkProyecto}`} className="btn btn-dark">Ver Proyecto</a>
                    <SocialIcon url={`${linkGit}`} className="" target="_blank" fgColor="#fff" style={{ height: 40, width:40, marginLeft:20}}/>
                  </div>
                </div>
            </div>
    )
}

export default ProyectoTarjeta

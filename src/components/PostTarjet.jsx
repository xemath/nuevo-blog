import React from 'react'

function PostTarjet({titulo, imagenUrl, id}) {
    return (
        <div className="col-sm-4">
              {/*<div className="card text-center border-dark">
                <img src="images/fondo.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-dark">Go somewhere</a>
                </div>
            </div>*/}
            <div className="card bg-dark text-white" >
                <img src={`${imagenUrl}`} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <a href={`/post/${id}`} className="btn btn-dark mx-auto mt-2">{titulo}</a>
                </div>
            </div>
        </div>
    )
}

export default PostTarjet

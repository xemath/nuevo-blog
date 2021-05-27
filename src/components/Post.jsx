import React from 'react';
import "../fondo.jpg"
class Post extends React.Component{
    
    
    render(){  
    return (
        <div className="container">
            
            <div className="row">
                <div className="col-sm-8 p-2 mx-auto">
                    <div className=" bg-white super-bordo">
                    <div className="img1">
                                <img src="/images/fondo.jpg" alt="..."/>
                            </div>
                            
                            <div className="p-4 rounded mt-3">
                                <h3 className="fw-bold text-left mb-3">"titulo"</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt animi doloribus fugit inventore illo natus voluptatibus consectetur adipisci. Molestiae.</p>
                                
                            </div>
                    </div>
                                    
                </div>
            </div>
        </div>
    )
    }
}

export default Post
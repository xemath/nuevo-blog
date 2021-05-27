import React from 'react'
import '../style-about.css';
import {SocialIcon} from 'react-social-icons';
function About() {
    return (
        <div className="profile-area">
            <h1 className="display-1 text-center titulo">Acerca de mi</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="card">
                            <div className="img1">
                                <img src="/images/fondito.jpg" alt=""/>
                            </div>
                            <div className="img2">
                                <img src="/images/me.jpg" alt="" />
                            </div>
                            <div className="main-text">
                                <h2 className="text-center">Carlos Castro</h2>
                                <p className="text-left">Desarrollador Web Junior.
                                    Amante de las motos, el anime, el gym, el cine independiente y por supuesto la programación.</p>
                                <p>Tecnologías que utilizo: Javascript, HTML, CSS (flexbox y grid), React, Bootstrap 5, Node js, Express js, MySQL, MongoDB</p>

                            </div>
                            <div className="socials">
                                
                                <SocialIcon url="https://github.com/xemath/" className="" target="_blank" fgColor="#fff" style={{ height: 40, width:40, marginLeft:20, marginBottom:20, marginTop:5}}/>
                                <SocialIcon url="https://facebook.com/carlos9877" className="" target="_blank" fgColor="#fff" style={{ height: 40, width:40, marginLeft:20, marginBottom:20, marginTop:5}}/>
                                <SocialIcon url="https://instagram.com/carlos.77.c" className="" target="_blank" fgColor="#fff" style={{ height: 40, width:40, marginLeft:20, marginBottom:20, marginTop:5}}/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

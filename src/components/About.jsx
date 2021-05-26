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
                                <img src="/images/fondo.png" alt=""/>
                            </div>
                            <div className="img2">
                                <img src="/images/fondo.png" alt="" />
                            </div>
                            <div className="main-text">
                                <h2>Carlos Castro</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi quo laboriosam itaque consectetur ratione nihil corporis unde non. Provident.</p>

                            </div>
                            <div className="socials">
                                
                                <SocialIcon url="https://github.com/xemath/" className="" target="_blank" fgColor="#fff" style={{ height: 40, width:40, marginLeft:20, marginBottom:20, marginTop:5}}/>
                                <SocialIcon url="https://facebook.com/carlos9877" className="" target="_blank" fgColor="#fff" style={{ height: 40, width:40, marginLeft:20, marginBottom:20, marginTop:5}}/>
                                <SocialIcon url="https://instagram.com/castro.77.c" className="" target="_blank" fgColor="#fff" style={{ height: 40, width:40, marginLeft:20, marginBottom:20, marginTop:5}}/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

import React from 'react'
import fetch from 'isomorphic-fetch';


class Post extends React.Component{
    constructor(){
        super();
        this.state = {
            post: [],
            contento: [],
            url: '',
        }
    }
    componentDidMount(){
        fetch(`http://localhost:1337/posts/${this.props.match.params.id}`)
        .then((response)=>{
        if(response.status >= 400){
            throw new Error('algo malo ha pasado papa');
        }
        return response.json();
        })
        .then((post)=>{
            let r = post.content.split('#');
            console.log(post.image.url)
            this.setState({post:post});
            this.setState({contento:r});
            this.setState({url:post.image.url})

        })
    }



    render(){  
    return (
        <div className="container">
            {
            console.log(this.state.url)
            }
            <div className="row">
                <div className="col-sm-8 p-2 mx-auto">
                    <div className=" bg-white super-bordo">
                    <div className="img1">
                                <img src={`http://localhost:1337${this.state.url}`} alt=""/>
                            </div>
                            
                            <div className="p-4 rounded mt-3">
                                <h3 className="fw-bold text-left mb-3">{this.state.post.titulo}</h3>
                                {
                                    this.state.contento.map(e=>{
                                        let x = e;
                                        if(e.charAt(0)==='p'){
                                            return <p className="mb-4">{x.slice(1)}</p>
                                        }
                                        else if(e.charAt(0)==='t'){
                                            return <h5 className="mb-3 fw-bold">{x.slice(1)}</h5>
                                        }
                                        else if(e.charAt(0)==='i'){
                                            //console.log(x.slice(1));
                                            return <img src={`http://localhost:1337/${x.slice(1)}`} className ="img-fluid rounded mb-3" alt=""/>
                                        }
                                        else{
                                            return <p>e</p>
                                        }
                                        
                                    })
                                }
                            </div>
                    </div>
                                    
                </div>
            </div>
        </div>
    )
    }
}

export default Post
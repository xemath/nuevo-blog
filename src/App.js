import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Blog from './components/Blog';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
export default function App() {
    return(
        <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route component={Home} path='/' exact/>
            <Route component={Blog} path='/blog' />
            <Route component={Projects} path='/proyectos' />
            <Route component={About} path='/about' />
            <Route component={Contact} path='/contact' />
            <Route  path='/Post/:id' render={props=>(
                <Post {...props}/>
            )}/>



        </Switch>

        </BrowserRouter>
    )
    
}
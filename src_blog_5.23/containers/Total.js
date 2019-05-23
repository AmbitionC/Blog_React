import React, { Component } from 'react';
import { HashRouter as Router, Route} from "react-router-dom";

import HomePage from './HomePage';
import Blog from './Blog';
import Notes from './Notes'
import About from './About';
import Works from './Works'
import Talks from './Talks';
import Publications from './Publications'

import Blog_1 from '../components/Blog/Blog_Pages/Blog_1'

import '../css/HomePage.css'
import '../css/Blog.css'
import '../css/Notes.css'
import '../css/About.css'
import '../css/Blog_Pages.css'
import '../css/Works.css'
import '../css/Talks.css'
import '../css/Publications.css'

import 'bootstrap/dist/css/bootstrap.min.css';

class Total extends Component {
    render() {
        return(
            <React.Fragment>
                <Router>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/Blogs" component={Blog}/>
                    <Route path="/Notes" component={Notes}/>
                    <Route path="/About" component={About}/>
                    <Route path='/Works' component={Works}/>
                    <Route path='/Talks' component={Talks}/>
                    <Route path='/Publications' component={Publications}/>

                    {/* 以下是博客部分 */}
                    <Route path="/Blogs/Blog_1" component={Blog_1}/>
                </Router>
            </React.Fragment>
        )
    }
}

export default Total
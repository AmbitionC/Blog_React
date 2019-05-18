import React, { Component } from 'react';
import { HashRouter as Router, Route} from "react-router-dom";

import HomePage from './HomePage';
import Blog from './Blog';
import About from './About';

import Blog_1 from '../components/Blog/Blog_Pages/Blog_1'

import '../css/HomePage.css'
import '../css/Blog.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Total extends Component {
    render() {
        return(
            <React.Fragment>
                <Router>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/Blogs" component={Blog}/>
                    <Route path="/About" component={About}/>
                    {/* 以下是博客部分 */}
                    <Route path="/Blogs/Blog_1" component={Blog_1}/>
                </Router>
            </React.Fragment>
        )
    }
}

export default Total
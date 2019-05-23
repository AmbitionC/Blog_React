import React, { Component } from 'react';

import Blog_Header from '../components/Blog/Blog_Header'
import Blog_Content from '../components/Blog/Blog_Content';
import Blog_Footer from '../components/HomePage/Homepage_Footer';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='Blog'>
                    <Blog_Header/>
                    <Blog_Content/>
                    <Blog_Footer/>
                </div> 
            </React.Fragment>
        )
    }
} 

export default Blog;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Blog_Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='blog_header'>
                    {blog_header_navigation()}
                    {blog_header_hr()}
                </div>
            </React.Fragment>
        )
    }
}

// Blog头部的导航栏部分
function blog_header_navigation() {
    return (
        <div>
            <ul className='blog_header_nav_links'>
                <li className='blog_header_nav_link'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='blog_header_nav_link'>
                    <Link to='/Blogs/'>Blogs</Link>
                    {/* <span>Blogs</span> */}
                </li>
                <li className='blog_header_nav_link'>
                    <Link to='/Notes/'>Notes</Link>
                </li>
                <li className='blog_header_nav_link'>
                    <Link to='/About/'>About</Link>
                </li>
                <li className='blog_header_nav_link'>
                    <Link to='/Works/'>Works</Link>
                </li>
                <li className='blog_header_nav_link'>
                    <Link to='/Talks/'>Talks</Link>
                </li>
                <li className='blog_header_nav_link'>
                    <Link to='/Publications/'>Publications</Link>
                </li>
            </ul>
        </div>
    )
}

// Blog头部的划分线部分
function blog_header_hr() {
    return (
        <div className='blog_header_hr'>
            <hr></hr>
        </div>
    )
}

export default Blog_Header
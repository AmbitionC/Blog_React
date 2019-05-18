import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const meta_title = [
    ['2019-01-06, Life', 'Test_Blog_1_测试博客1', '/Blogs/Blog_10'],
    ['2018-09-27, Visualization', 'Test_Blog_2_测试博客2', '/Blogs/Blog_9'],
    ['2018-09-27, Visualization', 'Test_Blog_2_测试博客2', '/Blogs/Blog_8'],
    ['2018-09-27, Visualization', 'Test_Blog_2_测试博客2', '/Blogs/Blog_7'],
    ['2018-09-27, Visualization', 'Test_Blog_2_测试博客2', '/Blogs/Blog_6'],
    ['2018-09-27, Visualization', 'Test_Blog_2_测试博客2', '/Blogs/Blog_5'],
    ['2018-09-27, Visualization', 'Test_Blog_2_测试博客2', '/Blogs/Blog_4'],
    ['2018-09-27, Visualization', 'Test_Blog_2_测试博客2', '/Blogs/Blog_3'],
    ['2018-09-27, Visualization', 'Test_Blog_2_测试博客2', '/Blogs/Blog_2'],
    ['2018-09-27, Visualization', 'Test_Blog_2_测试博客2', '/Blogs/Blog_1'] 
]

class Blog_Content extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='blog_content'>
                    {blog_content_main()}
                </div>
            </React.Fragment>
        )
    }
}

function blog_content_main(){
    return (
        <div className='blog_content_main'>
            {blog_content_list()}
            {blog_page_nav()}
        </div>
    )
}

function blog_content_list() {
    return (
        <ul className='blog_content_lists'>
            {meta_title.map(
                ([meta, title, link]) => {
                return (
                    <React.Fragment>
                    <li className='blog_content_post'>
                        <span className='blog_content_post_meta'>{meta}</span>
                        <h3>
                            {/* <a className='blog_content_post_link' href={link}>{title}</a> */}
                            <Link className='blog_content_post_link' to={link}>{title}</Link> 
                        </h3>
                    </li>
                    </React.Fragment>
                )
            })}
        </ul>
    )
}

function blog_page_nav() {
    return (
        <div className='blog_page_nav'>
            <hr></hr>
            <div className='blog_page_nav_lists'>
                <span className='blog_page_number_current'>1</span>
                <a className='blog_page_number_2' href='/Blog/Page_2'>2</a>
                <a className='blog_page_number_next' href='/Blog/Page_2'>Next>></a>
            </div>
        </div>
    )
}

export default Blog_Content
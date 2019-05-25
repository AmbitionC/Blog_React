import React, { Component } from 'react';

const meta_title = [
    ['2019-01-06, Life', '2018 平淡无奇', '/Blogs/Blog_1'],
    ['2018-09-27, Visualization', '十年博客折腾历史', 'https://github.com']
]

class HomePage_Content extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='content'>
                    {content_main()}
                </div>
            </React.Fragment>
        )
    }
}

function content_main() {
    return (
        <div className='content_main'>
            {content_list()} 
            {content_pagination()}
        </div>
    )
}

function content_list() {
    return (
        <ul className='content_lists'>
            {meta_title.map(
                ([meta, title, link]) => {
                return (
                    <React.Fragment>
                    <li className='content_post'>
                        <span className='content_post_meta'>{meta}</span>
                        <h3>
                            <a className='content_post_link' href={link}>{title}</a>
                        </h3>
                    </li>
                    </React.Fragment>
                )
            })}
        </ul>
    )
}

function content_pagination() {
    return (
        <div className='content_pagination'>
            <a href='/Blogs' className='content_blog_link'>更多文章</a>
        </div>
    )
}

export default HomePage_Content
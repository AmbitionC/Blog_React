import React, { Component } from 'react';

const meat_title = [
    ['2019-01-06, Life', '铁汁', 'https://www.baidu.com'],
    ['2018-09-27, Visualization', '张老师压死', 'https://github.com']
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
            {meat_title.map(
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
            <a href='/' className='content_blog_link'>更多文章</a>
        </div>
    )
}

export default HomePage_Content
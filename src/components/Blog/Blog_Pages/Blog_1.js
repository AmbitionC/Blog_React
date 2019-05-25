import React, { Component } from 'react';
import myMarked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';

import Blog_Header from '../Blog_Header';
import Blog_Footer from '../../HomePage/Homepage_Footer'

import post_blog_1 from '../../../posts/blogs/Blog_1_天池1.md'

// Tags设置
const Tags = 'Competition';

class Blog_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        }
    }

    componentWillMount() {

        myMarked.setOptions({
            renderer: new myMarked.Renderer(),
            highlight: function(code) {
              return hljs.highlightAuto(code).value;
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
          });

        fetch(post_blog_1)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text}));
    }


    render() {
        const { markdown } = this.state;
        return(
            <React.Fragment>
                <div className='Blog_1'>
                    <Blog_Header/>
                    <div className='blog_pages'>
                        <div dangerouslySetInnerHTML = {{__html: myMarked(markdown )}}></div>
                        {blog_page_tags()}
                    </div>
                    <Blog_Footer />
                </div>
            </React.Fragment>
        )
    }
}

function blog_page_tags() {
    return (
        <div className='blog_page_tags'>
            <span>{'Tags: '}</span>
            <span>{Tags}</span>
        </div>
    )
}

export default Blog_1
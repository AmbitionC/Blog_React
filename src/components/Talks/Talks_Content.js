import React, { Component } from 'react';
import myMarked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';

import Talks from '../../posts/talks/Talks.md';

class Talks_Content extends Component {
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

        fetch(Talks)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text}));
    }
    render() {
        const { markdown } = this.state;
        return(
            <React.Fragment>
                <div className='talks'>
                    <div className='talks_content'>
                        <div dangerouslySetInnerHTML = {{__html: myMarked(markdown )}}></div>
                    </div>
                </div>
            </React.Fragment>
        )
    } 
}

export default Talks_Content
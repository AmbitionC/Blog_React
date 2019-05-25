import React, { Component } from 'react';
import myMarked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';

import Publications from '../../posts/publications/Publications.md';

class Publications_Content extends Component {
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

        fetch(Publications)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text}));
    }
    render() {
        const { markdown } = this.state;
        return(
            <React.Fragment>
                <div className='publications'>
                    <div className='publications_content'>
                        <div dangerouslySetInnerHTML = {{__html: myMarked(markdown )}}></div>
                    </div>
                </div>
            </React.Fragment>
        )
    } 
}

export default Publications_Content
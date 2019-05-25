import React, { Component } from 'react';
import myMarked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';

import note_1 from "../../../posts/notes/1Computer_Science/Computer_Science.md"; 

class Note_1 extends Component {
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
        fetch(note_1)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    } 

    render() {
        const { markdown } = this.state;
        return (
            <React.Fragment>
                <div className='notes_content'>
                    <div className='notes_page'>
                        <div dangerouslySetInnerHTML = {{__html: myMarked( markdown )}}></div> 
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Note_1

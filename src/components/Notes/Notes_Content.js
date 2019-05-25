import React, { Component } from 'react';
import myMarked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';

import Note_1 from "./Note_pages/Note_1"; 
import Note_2 from "./Note_pages/Note_2"; 

const notes = [<Note_1/>, <Note_2/>]

let index_cache = 0

class Notes_Content extends Component {
    
    handleOpenKeys() {
        const navbar_content = this.props.content;
        // console.log("navbar_content.length=", navbar_content.length);
        // 跳转部分
        if(navbar_content.length == 2) {
            console.log("这是跳转")
            let numbers = this.props.content[1].split('_');
            let index = parseInt(numbers[1]) - 1;
            console.log("index", index)
            index_cache = index;
            const temp = notes[index];
            return (
                <React.Fragment>
                    {temp}
                </React.Fragment>
            )
        }
        // 收起来部分
        if(navbar_content == 0) {
            console.log("这是收起来")
            console.log("index_cache=",index_cache)
            const temp = notes[index_cache];
            return (
                <React.Fragment>
                    {temp}
                </React.Fragment>
            )
        }
        // 展开部分
        if(navbar_content.length == 1) {
            console.log("这是展开")
            let numbers = this.props.content[0].split('_');
            let index = parseInt(numbers[1]) - 1;
            console.log("index=", index)
            const temp = notes[index];
            return (
                <React.Fragment>
                    {temp}
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.handleOpenKeys()}
            </React.Fragment>
        )
    }
}

export default Notes_Content

import React, { Component } from 'react';

import Notes_Navigation from '../components/Notes/Notes_Navigation'
import Notes_Content from '../components/Notes/Notes_Content'

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openKeys: ['Note_1'],
        }
    }

    receiveOpenKeys(openKeys){
        console.log('我收到openKey啦，它是', openKeys)
        this.setState({
            openKeys : openKeys
        })
    }
   
    render() {
        return (
            <React.Fragment>
                <div className='notes'>
                    <Notes_Navigation receiveOpenKeys={this.receiveOpenKeys.bind(this)}/>
                    <Notes_Content content={this.state.openKeys}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Notes
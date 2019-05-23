import React, { Component } from 'react';

import HomePage_Header from '../components/HomePage/HomePage_Header'
import HomePage_Footer from '../components/HomePage/Homepage_Footer';
import Works_Content from '../components/Works/Works_Content'


class Works extends Component {
    render(){
        return (
            <React.Fragment>
                <div className='works'>
                    <HomePage_Header />
                    <Works_Content />
                    <HomePage_Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default Works;
import React, { Component } from 'react';

import HomePage_Header from '../components/HomePage/HomePage_Header'
import HomePage_Footer from '../components/HomePage/Homepage_Footer';
import Publications_Content from '../components/Publications/Publications_Content'


class Publications extends Component {
    render(){
        return (
            <React.Fragment>
                <div className='publications'>
                    <HomePage_Header />
                    <Publications_Content />
                    <HomePage_Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default Publications;
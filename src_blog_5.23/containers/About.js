import React, { Component } from 'react';

import HomePage_Header from '../components/HomePage/HomePage_Header'
import HomePage_Footer from '../components/HomePage/Homepage_Footer';
import About_Content from '../components/About/About_Content'


class About extends Component {
    render(){
        return (
            <React.Fragment>
                <div className='about'>
                    <HomePage_Header />
                    <About_Content />
                    <HomePage_Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default About;
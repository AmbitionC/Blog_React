import React, { Component } from 'react';

import HomePage_Header from '../components/HomePage/HomePage_Header'
import HomePage_Footer from '../components/HomePage/Homepage_Footer';
import Talks_Content from '../components/Talks/Talks_Content'


class Talks extends Component {
    render(){
        return (
            <React.Fragment>
                <div className='talks'>
                    <HomePage_Header />
                    <Talks_Content />
                    <HomePage_Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default Talks;
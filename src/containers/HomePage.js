import React, { Component } from 'react';
import HomePage_Header from '../components/HomePage/HomePage_Header'
import HomePage_Footer from '../components/HomePage/Homepage_Footer';

import '../css/HomePage.css'

class HomePage extends Component {
    render(){
        return (
            <React.Fragment>
                <div className='home'>
                    <HomePage_Header/>
                    <HomePage_Footer/>
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage;
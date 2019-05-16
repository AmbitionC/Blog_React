import React, { Component } from 'react';

class HomePage_Footer extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <div className='footer'> */}
                <footer className='footer'>
                    {license()}
                    {copyright()}
                </footer>  
                {/* </div> */}
            </React.Fragment> 
        )
    }
}

function license() {
    return (
        <React.Fragment>
            <p className='license'>
                {'All content under '}
                <a href='https://pages.github.com/'>{'GitHub Pages'}</a>
            </p>
        </React.Fragment>
    )
}

function copyright() {
    return (
        <React.Fragment>
            <p className='copyright'>
                {'Powered by '}
                <a href='https://reactjs.org/'>React</a>
            </p>
        </React.Fragment>
    )
}

export default HomePage_Footer
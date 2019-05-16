import React, { Component } from 'react';

import avatarImg from '../../img/avatar.jpg';

class HomePage_Header extends Component {
    render(){
        return (
            <React.Fragment>
                <div className='header'>
                    {blank()}
                    {header_info()}
                </div>
            </React.Fragment>
        )
    }
}

// Blank部分
function blank(){
    return (
        <div className='header_blank'>
        </div>
    )
}

// 个人昵称部分
function title(){
    return (
        <React.Fragment>
            <h1 className='header_title'>{"AmbitionC"}</h1>
        </React.Fragment>
    )
}

// 简短自我介绍部分
function description(){
    return (
        <React.Fragment>
            <h5 className='description'>{'A post-graduate student, focusing on Visualization & Web development, Lifelong learner'}</h5>
        </React.Fragment>
    )
}

// 昵称与自我介绍部分
function title_part(){
    return (
        <React.Fragment>
            <div className='title'>
                {title()}
                {description()}
            </div>
        </React.Fragment>
    )
}

// 导航栏部分
function nav_links(){
    return (
        <React.Fragment>
            <ul className='nav_links'>
                <li className='nav_link'>
                    <a href='/'>Blogs</a>
                </li>
                <li className='nav_link'>
                    <a href='/'>Notes</a>
                </li>
                <li className='nav_link'>
                    <a href='/'>About</a>
                </li>
                <li className='nav_link'>
                    <a href='/'>Works</a>
                </li>
                <li className='nav_link'>
                    <a href='/'>Talks</a>
                </li>
                <li className='nav_link'>
                    <a href='/'>Publications</a>
                </li>
            </ul>
        </React.Fragment>
    )
}

// Homepage的头部左边部分，包括title、description、nav_links
function header_left(){
    return (
        <React.Fragment>
            <div className='header_left'>
                {title_part()}
                {nav_links()}
            </div>
        </React.Fragment>
    )
}

// 头像部分
function avatar(){
    return (
        <React.Fragment>
            <div className='avatar_part'>
                <img src={avatarImg} className='avatar' />
            </div>
        </React.Fragment>
    )
}

// 社交媒体
function social_links(){
    return (
        <React.Fragment>
            <div className='social_links'>
                <ul className='social_media_links'>
                    <li>
                        <a href='https://github.com/AmbitionC' title="GitHub">
                            <svg className='Github' width='1.2em' height='1.2em' viewBox="0 0 1024 1024"><path d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z" fill="#bfbfbf" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href='https://me.csdn.net/ChenHaoUESTC' title="CSDN">
                            <svg className='CSDN' width='1em' height='1em' viewBox="0 0 1024 1024"><path d="M1141.351404 39.055942l-28.91333 218.474629c-126.144728-19.927251-251.601043-38.376709-377.75495-27.674187-115.460564 9.802996-227.405635 32.180995-309.124802 122.987208-150.018878 166.696821-68.391499 396.461416 158.252293 437.463272 141.115408 25.52634 283.919721 11.785624 425.448176-8.123269-5.452228 112.440727-5.764308 95.303843-10.674985 205.229569-1.073924 24.057726 4.277337 14.612705-161.648461 31.914809-176.004159 9.004437-351.879815 11.189-520.550085-52.888447C156.545029 905.721534 30.675666 809.16019 5.176863 630.815428c-26.251468-183.595056 48.803865-331.796524 192.516883-446.128091C413.36883 13.098197 790.802521-47.271 1141.351404 39.055942z" fill="#bfbfbf" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.zhihu.com/people/chen-hao-666/activities' title="知乎">
                            <svg className='ZhiHu' width='1em' height='1em' viewBox="0 0 1024 1024"><path d="M544.949 561.422s0-71.387-34.779-75.050c-34.779-3.663-142.775 0-142.775 0v-219.654h161.078s-1.83-73.219-32.949-73.219h-261.755l43.93-117.148s-65.897 3.663-89.692 45.761-98.844 252.604-98.844 252.604 25.627 10.983 67.726-20.134c42.101-31.116 56.743-86.033 56.743-86.033l76.879-3.663 1.83 223.316s-133.621-1.83-161.078 0c-27.457 1.83-42.101 75.050-42.101 75.050h203.182s-18.307 124.47-69.557 214.164c-53.085 89.692-151.929 161.078-151.929 161.078s71.387 29.287 140.947-10.983c69.557-42.101 120.811-223.316 120.811-223.316l162.912 203.182s14.643-97.013-1.83-124.47c-18.307-27.457-113.49-137.283-113.49-137.283l-42.101 36.607 29.287-120.811h177.552zM587.050 188.010l-1.83 660.793h65.897l23.795 82.37 115.321-82.37h162.912v-660.793h-366.091zM879.92 775.584h-76.879l-97.013 75.050-21.965-75.050h-20.134v-512.527h215.991v512.527z" fill="#bfbfbf" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href='/' title="RSS">
                            <svg className='RSS' width='1em' height='1em' viewBox="0 0 1024 1024"><path d="M128 768a128 128 0 1 0 0 256 128 128 0 0 0 0-256zM0 368v176c265.104 0 480 214.912 480 480h176c0-362.32-293.696-656-656-656zM0 0v176c468.336 0 848 379.664 848 848h176C1024 458.464 565.536 0 0 0z" fill="#bfbfbf" /></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

// Homepage的头部的右边部分，包括avatar和media_list
function header_right(){
    return (
        <React.Fragment>
            <div className='header_right'>
                {avatar()}
                {social_links()}
            </div>
        </React.Fragment>
    )
}

// Homepage的头部的左右两边部分
function header_info(){
    return (
        <React.Fragment>
            <nav className='header_info'>
                {header_left()}
                {header_right()}
            </nav> 
        </React.Fragment>
    )
}


export default HomePage_Header
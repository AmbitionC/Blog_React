import React, { Component } from 'react';
import { Menu, Anchor } from 'antd';
import 'antd/dist/antd.css';
// import { Link } from 'react-router-dom';


const SubMenu = Menu.SubMenu;

const { Link } = Anchor;

class Sider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openKeys: ['Note_1'],
        }
        this.rootSubmenuKeys = ['Note_1', 'Note_2', 'Note_3']
    }
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        console.log("ch:",latestOpenKey)
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
            console.log(openKeys)
            this.props.receiveOpenKeys(openKeys)
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [latestOpenKey]
                // openKeys: latestOpenKey
            });
            console.log(openKeys)
            this.props.receiveOpenKeys(openKeys)
        }
    }

    render() {
        return (
            <div className='notes_navigation'>
                {Content_Table()}
                <Menu 
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                >
                    <SubMenu
                        key="Note_1"
                        title={
                            <span>
                                Navigation One
                            </span>
                        }
                    >
                        <Anchor>
                            <Link href={window.location.hash + "#11-mooc-courses"} title="1.1 Mooc courses" />
                            <Link href={window.location.hash + "#12-命令式"} title="1.2 命令式" >
                                <Link href={window.location.hash + "#19-函数式"} title="1.9 函数式" />
                                <Link href={window.location.hash + "#19-函数式"} title="1.9 函数式" />
                            </Link>

                            <Link href={window.location.hash + "#13-函数式"} title="1.3 函数式" />
                            <Link href={window.location.hash + "#14-mooc-courses"} title="1.4 Mooc courses" />
                            <Link href={window.location.hash + "#15-命令式"} title="1.5 命令式" />
                            <Link href={window.location.hash + "#16-函数式"} title="1.6 函数式" />
                            <Link href={window.location.hash + "#17-mooc-courses"} title="1.7 Mooc courses" />
                            <Link href={window.location.hash + "#18-命令式"} title="1.8 命令式" />
                            <Link href={window.location.hash + "#19-函数式"} title="1.9 函数式" />
                        </Anchor>
                    </SubMenu>
                    <SubMenu
                        key="Note_2"
                        title={
                            <span>
                                Navigation two
                            </span>
                        }
                    >
                        <Anchor>
                            <Link href="#21-html" title="1.1 Mooc courses" />
                            <Link href="#22-css" title="1.2 命令式" />
                            <Link href="#23-javascript" title="1.3 函数式" />
                        </Anchor>
                    </SubMenu>
                    <SubMenu
                        key="Note_3"
                        title={
                            <span>
                                Navigation three
                            </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
                {Author_Info()}
            </div>
            
        )
    }
}

function Content_Table() {
    return (
        <div className='notes_content_table'>
            {"Table of Content"}
        </div>
    )
}

function Author_Info() {
    return (
        <div className="notes_author_info">
            <span>
                {"Author: Hao Chen"}
            </span>
            <div>
                <a href='/'>HomePage</a>
            </div> 
        </div>
    )
}

export default Sider;

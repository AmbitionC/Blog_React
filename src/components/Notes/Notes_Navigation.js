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
        this.rootSubmenuKeys = ['Note_1', 'Note_2', 'Note_3', 'Note_4', 'Note_5', 'Note_6', 'Note_7', 'Note_8', 'Note_9', 'Note_10', 'Note_11', 'Note_12', 'Note_13', 'Note_14', 'Note_15']
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
                                {'1. Computer Science'}
                                </span>
                            }
                        >
                            <Anchor>
                                <Link href="#21-html" title="1.1 Mooc courses" />
                                <Link href="#22-css" title="1.2 命令式" />
                                <Link href="#23-javascript" title="1.3 函数式" />
                                <Link href="#21-html" title="1.1 Mooc courses" />
                                <Link href="#22-css" title="1.2 命令式" />
                                <Link href="#23-javascript" title="1.3 函数式" />
                                <Link href="#21-html" title="1.1 Mooc courses" />
                                <Link href="#22-css" title="1.2 命令式" />
                                <Link href="#23-javascript" title="1.3 函数式" />
                                <Link href="#21-html" title="1.1 Mooc courses" />
                                <Link href="#22-css" title="1.2 命令式" />
                                <Link href="#23-javascript" title="1.3 函数式" />
                            </Anchor>
                        </SubMenu>
                        <SubMenu
                            key="Note_2"
                            title={
                                <span>
                                    {'2. HTML & CSS'}
                                </span>
                            }
                        >
                            <Anchor>
                                <Link href={window.location.hash + "#20-links"} title="2.0 Links" />
                                <Link href={window.location.hash + "#21-标签"} title="2.1 标签">
                                    <Link href={window.location.hash + "#211-基础标签"} title="2.1.1 基础标签" />
                                    <Link href={window.location.hash + "#212-高级标签"} title="2.1.2 高级标签" />
                                </Link>
                                <Link href={window.location.hash + "#22-css"} title="2.2 CSS" >
                                    <Link href={window.location.hash + "#221-css引入方法"} title="2.2.1 CSS引入方法" />
                                    <Link href={window.location.hash + "#222-css选择器"} title="2.2.2 CSS选择器" />
                                </Link>
                                <Link href={window.location.hash + "#23-盒子模型"} title="2.3 盒子模型" />
                                <Link href={window.location.hash + "#24-浮动模型"} title="2.4 浮动模型" />
                                <Link href={window.location.hash + "#25-补充知识点"} title="2.5 补充知识点" />
                            </Anchor>
                        </SubMenu>
                        <SubMenu
                            key="Note_3"
                            title={
                                <span>
                                    {'3. JavaScript'}
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Note_4"
                            title={
                                <span>
                                    {'4. HTTP & Networks'}
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Note_5"
                            title={
                                <span>
                                    {'5. EcmaScript6'}
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Note_6"
                            title={
                                <span>
                                    {'6. Visualization'}
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Note_7"
                            title={
                                <span>
                                    {'7. Algorithm'}
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Note_8"
                            title={
                                <span>
                                    {'8. Data Structure'}
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Note_9"
                            title={
                                <span>
                                    {'9. Data Mining'}
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Note_10"
                            title={
                                <span>
                                    {'10. React'}
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Note_11"
                            title={
                                <span>
                                    {'11. Object-oriented Design'}
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Note_12"
                            title={
                                <span>
                                    {'12. Database'}
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Note_13"
                            title={
                                <span>
                                    {'13. Node'}
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Note_14"
                            title={
                                <span>
                                    {'14. Computer Graphics'}
                                </span>
                            }
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="Note_15"
                            title={
                                <span>
                                    {'15. Life'}
                                </span>
                            }
                        >
                            
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
            <p>
                {"Table of Content"}
            </p>
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

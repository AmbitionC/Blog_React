import React, { Component } from 'react';
import { Carousel } from 'antd'
import "antd/dist/antd.css";

class Works_Content extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="works_content">
                    {Works_work1()}
                    {Works_work2()}
                    {Works_work3()}
                    {Works_work4()}

                </div>
            </React.Fragment>
        )
    }
}

function Works_work1() {
    return (
        <div className='Works_work1'>
            <div className='work1_introduction'>
                <h1>{'阿里云天池“飞凤数创”数据可视化大赛 亚军'}</h1>
                <h3>{'无锡市体育设施选址规划平台'}</h3>
                <p>{'作品为城市体育设施提供选址规方案，利用数据分析评估城市环境信息，针对应用场景构建数学模型，设计寻优算法。结合数据可视化完成平台开发'}</p>
            </div>
            <div className='work1_carousel'>
                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                </Carousel>
            </div>
            <div className='work1_links'>
                <a href="https://tianchi.aliyun.com/markets/tianchi/feifeng2018">{"<大赛链接>"}</a>
                <a href="https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/Blog_Works/%E7%AD%94%E8%BE%A9PPT.pdf">{"<答辩资料>"}</a>
            </div>
        </div>
    )
}

function Works_work2() {
    return (
        <div className='Works_work2'>
            <div className='work2_introduction'>
                <h1>{'阿里云天池“数智教育”数据可视化大赛 '}</h1>
                <h3>{'“数智教育”教育数据可视化平台'}</h3>
                <p>{'作品通过数据分析和可视化展示，挖掘重要信息，探索面向学生、校园的数据分析体系，设计并形成数据分析门户，精细化服务教学管理工作'}</p>
            </div>
            <div className='work2_carousel'>
                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                </Carousel>
            </div>
            <div className='work2_links'>
                <a href="">{"<作品链接>"}</a>
                <a href="">{"<答辩资料>"}</a>
            </div>
        </div>
    )
}


function Works_work3() {
    return (
        <div className='Works_work3'>
            <div className='work3_introduction'>
                <h1>{'中电三十所电磁频谱测绘平台'}</h1>
                {/* <h3>{''}</h3> */}
                <p>{'结合网页框架和Echarts组件开发，实现场景内频谱时频域占用观察和预测，基于DBSCAN实现频谱信道聚类与关联性验证'}</p>
            </div>
            <div className='work3_carousel'>
                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                </Carousel>
            </div>
            <div className='work3_links'>
                <a href="">{"<作品链接>"}</a>
                <a href="">{"<答辩资料>"}</a>
            </div>
        </div>
    )
}


function Works_work4() {
    return (
        <div className='Works_work4'>
            <div className='work4_introduction'>
                <h1>{'SpoVis: Visual Exploration of Optimal Location Planning for Sports Facilities'}</h1>
                {/* <h3>{''}</h3> */}
                <p>{'SpoVis针对城市体育设施选址问题提出一种高效可信的视觉探索方案'}</p>
            </div>
            <div className='work4_carousel'>
                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                </Carousel>
            </div>
            <div className='work4_links'>
                <a href="">{"<作品链接>"}</a>
                <a href="">{"<答辩资料>"}</a>
            </div>
        </div>
    )
}

export default Works_Content 
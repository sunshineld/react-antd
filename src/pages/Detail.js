import React, { Component } from 'react';
import '../css/Detail.css';

class Detail extends Component {
    render() {
        return (
            <div className='detail_content'>
                <div className='detail_contentL'>
                    <p className='article_title'>antd design part</p>
                    <p className='article_content'>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                    <p className='article_content'>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                    <p className='article_content'>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                    <p className='article_content'>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                </div>
                <div className='detail_contentR'>
                    <img alt='bg' style={{width:'100%'}} src={require('../images/detail_img.jpeg')}/>
                </div>
            </div>
        )
    }
}
export default Detail
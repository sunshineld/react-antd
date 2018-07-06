import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import '../../css/Html.css';

const data = [
    {
        title: 'HTML title1'
    },
    {
        title: 'HTML title2'
    },
    {
        title: 'HTML title3'
    },
    {
        title: 'HTML title5'
    },
]
class Html extends Component {
    render() {
        return (
            <div className='container_h'>
                <List
                    itemLayout='horizontal'
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta 
                                title={<Link to='/detail'>{item.title}</Link>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default Html
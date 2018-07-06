import React, { Component } from 'react';
import { List } from 'antd'
import '../../css/Javascript.css';

const data = [
    {
        title: 'Javascript title1'
    },
    {
        title: 'Javascript title2'
    },
    {
        title: 'Javascript title3'
    },
    {
        title: 'Javascript title5'
    },
]
class Javascript extends Component {
    render() {
        return(
            <div className='container_j'>
                <List
                    itemLayout='horizontal'
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta 
                                title={<a href=''>{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default Javascript
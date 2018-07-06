import React, { Component } from 'react';
import { List } from 'antd'
import '../../css/Css.css';
const data = [
    {
        title: 'CSS title1'
    },
    {
        title: 'CSS title2'
    },
    {
        title: 'CSS title3'
    },
    {
        title: 'CSS title5'
    },
]
class Css extends Component {
    render() {
        return (
            <div className='container_c'>
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
export default Css
import React, { Component } from 'react';
import { List } from 'antd'
import '../../css/ES6.css'

const data = [
    {
        title: 'ES6 title1'
    },
    {
        title: 'ES6 title2'
    },
    {
        title: 'ES6 title3'
    },
    {
        title: 'ES6 title5'
    },
]
class ES6 extends Component {
    render() {
        return(
            <div className='container_e'>
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
export default ES6
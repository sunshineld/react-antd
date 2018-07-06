import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar, Icon } from 'antd'; 
import '../css/Home.css';


const IconText = ({type, text}) => {
    return(
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
        </span>
    )
}
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData:[],
            msg:''
        }
    }
    //组件渲染前
    componentWillMount() {
        for(var i = 0; i < 5; i++) {
            this.state.listData.push({
                path:'/detail',
                title: `ant design part ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        } 
    }
    componentDidMount() {
        console.log("哈哈哈哈",this.props.text);
    }
    render() {
        console.log(this.props.text)
        return (
            <div className='content_h'>
                <div className='content_left'>
                    <List
                        itemLayout='vertical'
                        size='large'
                        dataSource={this.state.listData}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                                actions={[<IconText type='star-o' text='6' />,<IconText type='like-o' text='12'/>,<IconText type='message' text='3' />]}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<Link to={item.path}>{item.title}</Link>}
                                    description={item.description}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />
                </div>
                <div className='content_right'>
                    <p className='newTitle'>最新文章</p>
                    <ul className='newList'>
                        <li>andt design 1</li>
                        <li>andt design 2</li>
                        <li>andt design 3</li>
                        <li>andt design 4</li>
                    </ul>
                </div> 
            </div>
        )
    }
}
export default Home;
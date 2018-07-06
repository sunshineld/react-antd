import React , { Component } from 'react';
import '../css/Share.css';
import Children from './Children';

class Share extends Component {
    constructor() {
        super();
        this.state = {
            msg: "我是父组件的msg,被传到Children组件中",
            childMsg: ''
        }
        this.receiveMsg = this.receiveMsg.bind(this);
    }
    //接受子组件传来的信息
    receiveMsg(msg) {
        this.setState({
            childMsg: msg
        })
    }
    render() {
        return (
            <div>
                这是分享页面
                <p>{this.state.childMsg}</p>
                <Children msg={this.state.msg} receiveMsg={this.receiveMsg}/>
            </div>
        )
    }
}
export default Share;
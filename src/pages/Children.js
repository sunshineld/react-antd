import React, { Component } from 'react';

class Children extends Component {
    constructor() {
        super();
        this.state = {
            childMsg: "我是子组件的msg，被传到父组件中"
        }
        this.postMsg = this.postMsg.bind(this);
    }
    postMsg() {
        this.props.receiveMsg(this.state.childMsg);
    }
    render() {
        return(
            <div>
                <p>
                    这是children组件<br />
                    {this.props.msg}<br />
                    <button onClick={this.postMsg}>点击传值给父组件</button>
                </p>
            </div>
        )
    }
}
export default Children;
import React, { Component } from 'react';
import { Input, Button } from 'antd';
import '../../css/Login.css'
class Login extends Component {
    render() {
        return (
            <div className='login_content'>
                <div className='login_box'>
                    <div className='title'>后台登录</div>
                    <div className='content'><span>用户名</span><Input type='text' size='large'/></div>
                    <div className='content'><span>密码</span><Input type='password' size='large'/></div>
                    <div className='btn'><Button size='large'>登录</Button></div>
                </div>
            </div>
        )
    }
}
export default Login;
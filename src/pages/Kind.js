import React,{ Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Menu } from 'antd';
import Html from './Kind/Html';
import Css from './Kind/Css';
import Javascript from './Kind/Javascript';
import ES6 from './Kind/ES6';
import '../css/Kind.css';

class Kind extends Component {
    render() {
        return (
            <div className='containerK'>
                <div className='contentL'>
                    <Menu
                      defaultSelectedKeys={['1']}
                    >
                        <Menu.Item key='1'><Link to='/kind/'>Html</Link></Menu.Item>
                        <Menu.Item key='2'><Link to='/kind/css'>Css</Link></Menu.Item>
                        <Menu.Item key='3'><Link to='/kind/javascript'>Javascript</Link></Menu.Item>
                        <Menu.Item key='4'><Link to='/kind/es6'>ES6</Link></Menu.Item>
                    </Menu>   
                </div>
                <div className='contentR'>
                    <Route exact path='/kind/' component={Html}></Route>
                    <Route path='/kind/css' component={Css}></Route>
                    <Route path='/kind/javascript' component={Javascript}></Route>
                    <Route path='/kind/es6' component={ES6}></Route>
                </div>
            </div>
        )
    }
}
export default Kind;
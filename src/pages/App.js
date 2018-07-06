import React, { Component } from 'react';
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import Home from './Home';
import Kind from './Kind';
import Share from './Share';
import More from './More';
import Detail from './Detail';
import $ from 'jquery';
// import logo from '../logo.svg';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "张三", age: '18', msg: '我是被传递到home组件的消息'};
    this.activeChange = this.activeChange.bind(this);
    this.navstyleChange = this.navstyleChange.bind(this);
  }
  // 自定义事件
  //点击导航菜单切换样式
  activeChange(e) {
    // console.log("被点击了",e.target.getAttribute('data-num'));
    let num = Number(e.target.getAttribute('data-num'));
    let a = e.target.tagName.toLowerCase();
    $(a).each(function(index,item) {
      if(index === num) {
        $(item).addClass('active').parent().siblings().children().removeClass('active')
      }
    })
  }
  //导航栏样式改变
  navstyleChange(name) {
    let num = 0;
    if(name === '') {
      num = "0";
    } else if(name === 'kind') {
      num = "1"
    } else if(name === 'share') {
      num = "2"
    } else if(name === 'about') {
      num = "3"
    }
    let classname = document.getElementsByClassName("link");
    for(let i = 0; i< classname.length; i++) {
      if(classname[i].getAttribute('data-num') === num) {
        classname[i].className = "link active";
        $(classname[i]).parent().siblings().children().removeClass('active')
      }
    }
  }
  componentDidMount() {
    let name = this.props.location.pathname.split('/')[1];
    this.navstyleChange(name);
  }
  //url的hash地址改变
  componentWillReceiveProps() {
    let name = this.props.history.location.pathname.split('/')[1];
    this.navstyleChange(name);
  }
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <h1>Sunshine</h1>
            <p>Meeting you at the most beautiful moment!</p>
          </header>
          <nav className='navmenu'>
            <ul>
              <li><Link to='/' replace className='link' data-num='0' onClick={this.activeChange} >Home</Link><span></span></li>
              <li><Link to='/kind' replace className='link' data-num='1' onClick={this.activeChange}>Kind</Link><span></span></li>
              <li><Link to='/share' replace className='link' data-num='2' onClick={this.activeChange}>Share</Link><span></span></li>
              <li><Link to='/about' replace className='link' data-num='3' onClick={this.activeChange}>About</Link></li>
            </ul>
          </nav>
          <div className='line'></div>
          {/* 路由 */}
          <Route exact path='/'  component={Home}/>
          <Route path='/kind' component={Kind}/>
          <Route path='/share' component={Share}/>
          <Route path='/about' component={More}/>
          <Route path='/detail' component={Detail}/>
        </div>
      </Router>
    );
  }
}


export default App;

/**
 * 入口
 * 
 * **/ 

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Sider from './pages/slide/slide'


function Index () { 
  return (
    <div className="body-box">

      <header className="heand-title">标题</header>

      <div className="content-box">
        <div className="left-box">
          <Sider></Sider>
        </div>

        <div className="right-box">
          <ul className="right-ul">
            <li className="li-item li-item1">11</li>
            <li className="li-item li-item2">22</li>
            <li className="li-item li-item3">33</li>
            <li className="li-item li-item4">44</li>
          </ul>

          <div className="right-div">
            **************
          </div>
        </div>
      </div>
      
    </div>
  )
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

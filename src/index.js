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
         {/* todo */}
        </div>
      </div>
      
    </div>
  )
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

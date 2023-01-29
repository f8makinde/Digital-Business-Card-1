import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Info from './Info.js'

function Index(){
  return (
    <div>
      <Info/> 
    </div>
  )
}
ReactDOM.render(<Index/>, document.getElementById("root"))
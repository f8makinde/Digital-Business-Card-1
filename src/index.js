import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Info from './Info'
import About  from './About'
function Index(){
  return (
    <div>
      <Info/> 
      <About/>
    </div>
  )
}
ReactDOM.render(<Index/>, document.getElementById("root"))
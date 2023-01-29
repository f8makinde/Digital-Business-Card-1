import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Info from './Info'
import About  from './About'
import Interest from './Interests'
function Index(){
  return (
    <div>
      <Info /> 
      <About />
      <Interest />
    </div>
  )
}
ReactDOM.render(<Index/>, document.getElementById("root"))
import React from "react"
import "./header.css"

class Header extends React.Component {

  render() {
    return (
      <div>
      < div className ="header">
      <img src = "./images/header.png"/>
      <div className = "name"> <p>Gunnlaugur Egilsson</p></div>
      </div>
      </div>
    )
  }

}

export default Header

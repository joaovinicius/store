import React from 'react'
import Btn from './atoms/Btn'



export default function App () {
  return (
    <React.Fragment>
      <h1>Ola</h1>
      <Btn />
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a></li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

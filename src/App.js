import React, { Component } from 'react'
import Login from './Login';
import './App.css'


export class App extends Component {

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }
  render() {
    return (

      <>
        <div >
          <Login />


        </div>


      </>

    )
  }
}

export default App

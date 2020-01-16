import React from 'react';
import LogoAnime from './Components/LogoAnime.jsx'


import './App.scss'
import {BrowserRouter, Route} from 'react-router-dom'


export default class Navigation extends React.Component {

 componentDidMount = () => {}

     render() {
       return (
        <BrowserRouter>     
        <div className="App">    
   
          <Route exact path = "/" component = {LogoAnime}  />
  
        {/*  <Route exact path="/Main"  render = {(props)=>  <Main {...props} />    }  />  */}
  
        {/* <h1 id = "Head">    React Standard Start  </h1> */}
   
        </div>
        </BrowserRouter>
       );
     }

}

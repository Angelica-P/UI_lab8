import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import './index.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Directory from './components/Directory'
import Quizzes from './components/Quizzes'
import About from './components/About'
import Entry from './components/Entry'
import Quiz from './components/Quiz'


import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <div className="App">
          <Navbar className="navbar"/>
          <Route exact path='/' component={ Home }/>
          <Route path='/about' component={ About }/>
          <Route path='/directory' component={ Directory }/>
          <Route exact path='/quizzes' component={ Quizzes }/>
          <Route path='/:entry' component={ Entry }/>
          <Route path='/quizzes/:quiz' component={ Quiz }/>
          <footer>
            <p className="text-center">Designed by Angelica Paynter</p>
          </footer>
        </div>
      </BrowserRouter>
  );
  }
}

export default App;

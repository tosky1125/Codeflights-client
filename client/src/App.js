import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Posting from './pages/Editor';
import axios from 'axios';
import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import Result from './pages/Result';
import Schedule from './pages/Schedule';
import View from './pages/View';
import LoginModal from './component/Modal/LoginModal';
import SignupModal from './component/Modal/SignupModal';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <SignupModal />
          <LoginModal />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/Mypage' component={Mypage} />
            <Route path='/Posting' component={Posting} />
            {/* <Route path='/Signup' component={Signup} /> 
            <Route path='/Login' component={Login} />  모달창으로 구현 기존 페이지 삭제 요망*/}
            <Route path='/result/:city/:article' component={View} />
            <Route path='/result/:city' component={Schedule} />
            <Route path='/result' component={Result} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

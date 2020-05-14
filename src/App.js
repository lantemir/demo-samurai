import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
//import DialogsContainer from './components/Dialogs/DialogsContainer'; 
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
// import { addPost } from './redux/state';
//import ProfileContainer from './components/Profile/ProfileContainer'; // обычная загрузка
//const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer')); // линивая загрузка
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/login/login';
import { connect } from 'react-redux';
import { compose } from 'redux';

import{initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));  //lasy загрузка подгрузится тогда когда нужно использовать
const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'));

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if(!this.props.initialized){
      return <Preloader/>
    }
   
 

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>

          <Route path='/dialogs'
            render={withSuspense(DialogsContainer)}/>

          <Route path='/profile/:userId?'
            render={withSuspense(ProfileContainer)}/>

          <Route path='/news' render={() => <News />} />

          <Route path='/users' render={() => <UsersContainer />} />

          <Route path='/login' render={() => <LoginPage />} />

        </div>

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose (
  withRouter, 
  connect(mapStateToProps, {initializeApp})) (App); 

// ctrl klik переход в класс

//auto import плагин для авто импорта
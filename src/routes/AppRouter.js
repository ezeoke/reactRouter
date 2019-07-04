import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Render from '../components/Render';

function AppRouter(){
 return (
  <div>
    <BrowserRouter> 
    <Header></Header>
    <Switch>
      <Route path='/' component={ Render }></Route>
      <Route path='/' component={ Render }></Route>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
  </div>                                                
 )
}
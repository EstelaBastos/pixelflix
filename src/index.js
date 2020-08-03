import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './main.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import VideoPage from './pages/VideoPage';
import CategoryPage from './pages/CategoryPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={VideoPage} exact />
      <Route path="/cadastro/categoria" component={CategoryPage} exact />
      <Route component={NotFound}/>
    </Switch>   
  </BrowserRouter>,
  document.getElementById('root')
);

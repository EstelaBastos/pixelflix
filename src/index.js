import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CadastroVideo from './pages/CadastroVideo';
import CadastroCategoria from './pages/CadastroCategoria';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
      <Route component={NotFound}/>
    </Switch>   
  </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Main from './components/Main/Main';
import Licenses from './components/Licenses/Licenses';
import Orders from './components/Orders/Orders';
import Letters from './components/Letters/Letters';
import Contacts from './components/Contacts/Contacts';
import Sitemap from './components/Sitemap/Sitemap';


ReactDOM.render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/licenses" component={Licenses} />
        <Route path="/orders" component={Orders} />
        <Route path="/letters" component={Letters} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/sitemap" component={Sitemap} />
      </Switch>
    </App>
  </Router>
), document.getElementById('root'));

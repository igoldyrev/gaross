import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import Main from './components/Main/Main';
import Licenses from './components/Licenses/Licenses';
import Orders from './components/Orders/Orders';
import Letters from './components/Letters/Letters';
import Contacts from './components/Contacts/Contacts';
import Sitemap from './components/Sitemap/Sitemap';
import rootReducer from './store/reducers/RootReducer';


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

ReactDOM.render((
  <Provider store={store}>
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
  </Provider>
), document.getElementById('root'));

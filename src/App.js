import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="header">
            Imitation Trello
            <hr/>
          </div>
          <div className="container">
            <Container />
            <div className="quoter">
              <p>The ultimate reason for setting goals is to entice you to become the person it takes to achieve them.</p>
              <p>&mdash;Jim Rohn</p>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

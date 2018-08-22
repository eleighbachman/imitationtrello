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
          </div>
          <div className="container">
            <Container />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

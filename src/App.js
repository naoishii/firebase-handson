import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';

import ChatRoom from './containers/ChatRoom';
import createStore from './createStore';
import { connectFirebase } from './firebase';

const store = createStore();
connectFirebase(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Chat App</h1>
          </header>
          <ChatRoom />
        </div>
      </Provider>
    );
  }
}

export default App;

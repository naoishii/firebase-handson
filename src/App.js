import React, { Component } from 'react';
import logo from './logo.svg';

import ChatRoom from './components/ChatRoom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat App</h1>
        </header>
        <ChatRoom />
      </div>
    );
  }
}

export default App;

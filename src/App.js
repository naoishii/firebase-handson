import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ChatRoom from './components/ChatRoom';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Chat App</h1>
          </header>
          <ChatRoom />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

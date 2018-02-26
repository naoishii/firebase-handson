import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Comment from './Comment';

class ChatRoom extends Component {
  render() {
    const mockData = [
      {
        username: 'aaa',
        comment: 'hoge',
      },
      {
        username: 'bbb',
        comment: 'huga',
      },
      {
        username: 'aaa',
        comment: 'hogehoge',
      },
    ];
    return <List>{mockData.map(item => <Comment {...item} />)}</List>;
  }
}

export default ChatRoom;

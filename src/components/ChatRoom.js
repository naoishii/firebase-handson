import React, { Component } from 'react';
import List, { ListItem } from 'material-ui/List';
import Comment from './Comment';
import CommentInput from './CommentInput';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import LoginModal from './LoginModal';

class ChatRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogedIn: false,
    };
  }
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
    return (
      <div>
        <List>
          {mockData.map(item => (
            <React.Fragment>
              <Comment {...item} />
              <Divider />
            </React.Fragment>
          ))}
        </List>
        <LoginModal isLogedIn={this.state.isLogedIn} />
        <Button variant="raised" color="primary">
          Hello World
        </Button>
        <CommentInput />
      </div>
    );
  }
}

export default ChatRoom;

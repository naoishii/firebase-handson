import React, { Component } from 'react';
import List, { ListItem } from 'material-ui/List';
import Comment from './Comment';
import Divider from 'material-ui/Divider';
import LoginModal from '../containers/LoginModal';
import CommentInput from '../containers/CommentInput';

class ChatRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogedIn: false,
    };
  }
  render() {
    return (
      <div>
        <List>
          {this.props.chat.comments.map(item => (
            <React.Fragment>
              <Comment {...item} />
              <Divider />
            </React.Fragment>
          ))}
        </List>
        <LoginModal isLogedIn={this.state.isLogedIn} />
        {this.props.username}
        <CommentInput />
      </div>
    );
  }
}

export default ChatRoom;

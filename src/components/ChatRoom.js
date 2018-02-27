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

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    return (
      <div style={{ marginBottom: '80px' }}>
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
        {this.props.isLogedIn}
        {this.props.uid}
        <CommentInput />
      </div>
    );
  }
}

export default ChatRoom;

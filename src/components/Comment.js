import React, { Component } from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const Comment = props => {
  return (
    <ListItem>
      <Avatar src="" style={{ backgroundColor: '#eee' }} />
      <ListItemText primary={props.username} secondary={props.message} />
    </ListItem>
  );
};

export default Comment;

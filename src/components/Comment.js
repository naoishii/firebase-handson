import React, { Component } from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const Comment = props => {
  return (
    <ListItem>
      <Avatar src="" />
      <ListItemText primary={props.username} secondary={props.comment} />
    </ListItem>
  );
};

export default Comment;

import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';

import { darkBlack } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

const Comment = props => {
  return (
    <ListItem
      leftAvatar={<Avatar src="" />}
      primaryText={props.username}
      secondaryText={<p>{props.comment}</p>}
      secondaryTextLines={2}
    />
  );
};

export default Comment;

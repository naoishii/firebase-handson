import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';

const styles = {
  submit: {
    position: 'fixed',
    bottom: '30px',
    backgroundColor: '#ddd',
  },
};

class CommentInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div style={styles.submit}>
        <TextField
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Icon>send</Icon>
      </div>
    );
  }
}

export default CommentInput;

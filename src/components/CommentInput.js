import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

const styles = {
  submit: {
    position: 'fixed',
    bottom: '20px',
    width: '100%',
    backgroundColor: '#ddd',
  },
};

class CommentInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleClick = () => {
    this.props.post(this.state.value);
  };

  render() {
    return (
      <div style={styles.submit}>
        <FormControl style={{ width: '80%', marginLeft: '10px' }}>
          <TextField
            value={this.state.value}
            placeholder="Placeholder"
            onChange={this.handleChange}
          />
        </FormControl>
        <IconButton onClick={this.handleClick}>
          <Icon>send</Icon>
        </IconButton>
      </div>
    );
  }
}

export default CommentInput;

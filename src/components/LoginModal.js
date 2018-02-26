import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      open: !this.props.isLogedIn,
      username: this.props.username,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
    this.props.updateUsername(this.state.username);
  };
  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div>
        <Button variant="raised" color="secondary" onClick={this.handleOpen}>
          ユーザ情報
          <Icon>people</Icon>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <Button
              variant="raised"
              color="secondary"
              onClick={() => this.props.anonymousLogin()}>
              匿名認証
              <Icon>face</Icon>
            </Button>

            <Divider />

            <DialogContentText>なまえをいれてね</DialogContentText>
            <TextField
              value={this.state.username}
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="name"
              label="username"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

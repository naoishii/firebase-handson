import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../modules/chat';
import Component from '../components/ChatRoom';

const mapStateToProps = state => {
  return {
    chat: state.chat,
    username: state.user.username,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);

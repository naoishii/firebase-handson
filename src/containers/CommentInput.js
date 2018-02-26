import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../modules/chat';
import Component from '../components/CommentInput';

const mapStateToProps = state => {
  return {
    username: state.user.username,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    post: bindActionCreators(actions.post, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);

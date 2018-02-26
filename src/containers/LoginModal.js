import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../modules/user';
import Component from '../components/LoginModal';

const mapStateToProps = state => {
  return {
    username: state.user.username,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);

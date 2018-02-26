import firebase from '../firebase';

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const AUTH_ERROR = 'user/AUTH_ERROR';
const UPDATE_USERNAME = 'user/UPDATE_USERNAME';

const initialState = {
  error: false,
  uid: '',
  isLogedIn: false,
  username: '名無しさん',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLogedIn: true,
        uid: action.payload.uid,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLogedIn: false,
        uid: '',
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case UPDATE_USERNAME: {
      return {
        ...state,
        username: action.payload.username,
      };
    }

    default:
      return state;
  }
}

const login = uid => {
  return {
    type: LOGIN,
    payload: {
      uid,
    },
  };
};
const logout = () => {
  return {
    type: LOGOUT,
  };
};
const error = () => {
  return {
    type: AUTH_ERROR,
  };
};

const updateUsername = username => {
  return {
    type: UPDATE_USERNAME,
    payload: {
      username,
    },
  };
};

// ここからふくざつ
const anonymousLogin = () => {
  console.log(123);
  return dispatch => {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
        dispatch(error());
      });
  };
};
export { login, logout, error, updateUsername, anonymousLogin };

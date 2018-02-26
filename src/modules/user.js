const UPDATE_LOGIN = 'user/UPDATE_LOGIN';
const UPDATE_USERNAME = 'user/UPDATE_USERNAME';

const initialState = {
  isLogedIn: false,
  username: '名無しさん',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return {
        ...state,
        isLogedIn: true,
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

const login = () => {
  return {
    type: UPDATE_LOGIN,
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

export { login, updateUsername };

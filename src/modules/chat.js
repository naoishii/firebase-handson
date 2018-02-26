const APPEND_COMMENTS = 'chat/APPEND_COMMENTS';

const initialState = {
  comments: [
    {
      username: 'aaa',
      comment: 'hoge',
    },
    {
      username: 'bbb',
      comment: 'huga',
    },
    {
      username: 'aaa',
      comment: 'hogehoge',
    },
  ],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case APPEND_COMMENTS: {
      return {
        ...state,
        comments: [...state.comments, ...action.payload.comments],
      };
    }

    default:
      return state;
  }
}

const appendComments = comments => {
  return {
    type: APPEND_COMMENTS,
    payload: {
      comments,
    },
  };
};

const post = comment => {
  return (dispatch, getState) => {
    const username = getState().user.username;
    dispatch({
      type: APPEND_COMMENTS,
      payload: {
        comments: [
          {
            username: username,
            comment,
          },
        ],
      },
    });
  };
};

export { appendComments, post };

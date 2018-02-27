import { db } from '../firebase';

const APPEND_COMMENTS = 'chat/APPEND_COMMENTS';
const REPLACE_COMMENTS = 'chat/REPLACE_COMMENTS';

const initialState = {
  comments: [
    {
      username: 'aaa',
      message: 'hoge',
    },
    {
      username: 'bbb',
      message: 'huga',
    },
    {
      username: 'aaa',
      message: 'hogehoge',
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
    case REPLACE_COMMENTS: {
      return {
        ...state,
        comments: action.payload.comments,
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

const replaceComments = comments => {
  return {
    type: REPLACE_COMMENTS,
    payload: {
      comments,
    },
  };
};

const fetchComments = comments => {
  return async dispatch => {
    const querySnapshot = await db
      .collection('chat')
      .orderBy('date')
      .get();

    // querySnapshotは独自型であり配列ではないのでmapは未実装
    const comments = [];
    querySnapshot.forEach(doc => {
      comments.push(doc.data());
    });

    dispatch(replaceComments(comments));
  };
};

const post = message => {
  return (dispatch, getState) => {
    const username = getState().user.username;
    const comment = {
      username: username,
      message,
      date: new Date(),
    };

    db
      .collection('chat')
      .add(comment)
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };
};

export { replaceComments, fetchComments, post };

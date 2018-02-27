const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.checkMessage = functions.firestore
  .document('chat/{id}')
  .onCreate(event => {
    const newValue = event.data.data();

    // access a particular field as you would any JS property
    const username = newValue.username;
    const message = newValue.message;
    const date = newValue.date;

    // perform desired operations ...
    if (message.includes('うんち') || message.includes('test')) {
      return event.data.ref.set({
        username,
        message: 'あぼーん',
        date,
      });
    }

    return null;
  });

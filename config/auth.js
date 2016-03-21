// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '531272470413539', // your App ID
        'clientSecret'  : 'bf5f1cfec73fc85f88940d6a7d230015', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    /*'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },*/

    'googleAuth' : {
        'clientID'      : '1043492162069-4c7pgjsngd51ge44ia13agj6nmru1705.apps.googleusercontent.com',
        'clientSecret'  : 'cql5WY0KuEKEJMbaIDaknZl0',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
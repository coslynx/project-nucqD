const config = {
  discordOAuth: {
    clientID: 'YOUR_DISCORD_CLIENT_ID',
    clientSecret: 'YOUR_DISCORD_CLIENT_SECRET',
    callbackURL: 'YOUR_CALLBACK_URL'
  },
  session: {
    cookieKey: 'YOUR_SESSION_COOKIE_KEY'
  },
  mongoDB: {
    uri: 'YOUR_MONGODB_URI'
  }
};

module.exports = config;
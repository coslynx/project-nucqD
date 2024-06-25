const DiscordOAuth = require('discord-oauth2');
const config = require('../backend/config/config');

const discordOAuth = new DiscordOAuth({
  clientId: config.discordClientId,
  clientSecret: config.discordClientSecret,
  redirectUri: config.discordRedirectUri,
});

module.exports = discordOAuth;
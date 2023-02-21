require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3001,
    redditUsername: procedd.env.REDDIT_USERNAME,
    redditPassword: process.env.REDDIT_PASSWORD
};

module.exports = config;
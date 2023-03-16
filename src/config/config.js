require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3001,
    redditUsername: procedd.env.REDDIT_USERNAME,
    redditPassword: process.env.REDDIT_PASSWORD,
    honeygain_cookies: process.env.HONEYGAIN_COOKIES,
    genshin_cookies_me: process.env.GENSHIN_COOKIES_ME,
    genshin_cookies_sasha: process.env.GENSHIN_COOKIES_SASHA
};

module.exports = config;
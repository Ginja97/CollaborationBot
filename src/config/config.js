require('dotenv').config();

const config = {
    port: process.env.PORT || 3001,
    redditUsername: process.env.REDDIT_USERNAME,
    redditPassword: process.env.REDDIT_PASSWORD,
    honeygain_cookies: process.env.HONEYGAIN_COOKIES,
    genshinCookiesMe: process.env.GENSHIN_COOKIES_ME,
    genshinCookiesSasha: process.env.GENSHIN_COOKIES_SASHA,
    // pg-promise options
    collaborationDbConfig: {
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOSTNAME,
        keepAlive: 'true',
        keepAliveIdleMillis: 200 * 1000,
        application_name: 'EC2 Webserver',
        max: 0,
    },
};

module.exports = config;
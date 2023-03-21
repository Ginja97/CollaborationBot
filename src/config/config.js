require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3001,
    redditUsername: procedd.env.REDDIT_USERNAME,
    redditPassword: process.env.REDDIT_PASSWORD,
    honeygain_cookies: process.env.HONEYGAIN_COOKIES,
    genshinCookiesMe: process.env.GENSHIN_COOKIES_ME,
    genshinCookiesSasha: process.env.GENSHIN_COOKIES_SASHA,
    collaboration_db_config: {
        database: 'postgres',
        port: 5432,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOSTNAME,
        keepAlive: 'true',
        keepAliveIdleMillis: 200 * 1000,
        application_name: 'EC2 Webserver',
        max: 0,
    },
};

module.exports = config;
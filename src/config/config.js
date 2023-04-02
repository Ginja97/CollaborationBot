require('dotenv').config();

const config = {
    apiToken: process.env.API_TOKEN,
    port: process.env.PORT || 3001,
    redditUsername: process.env.REDDIT_USERNAME,
    redditPassword: process.env.REDDIT_PASSWORD,
    honeygain_cookies: process.env.HONEYGAIN_COOKIES,
    genshinCookiesMe: process.env.GENSHIN_COOKIES_ME,
    genshinCookiesSasha: process.env.GENSHIN_COOKIES_SASHA,
    genshinBrowserHeaders: {
        "Host": "sg-hk4e-api.hoyolab.com", 
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0", 
        "Accept": "application/json, text/plain, */*", 
        "Accept-Language": "en-US,en;q=0.5", 
        "Accept-Encoding": "gzip, deflate, br", 
        "Content-Type": "application/json;charset=utf-8", 
        "Content-Length": "29", 
        "Origin": "https://act.hoyolab.com", 
        "Connection": "keep-alive", 
        "Referer": "https://act.hoyolab.com/", 
        "Sec-Fetch-Dest": "empty", 
        "Sec-Fetch-Mode": "cors", 
        "Sec-Fetch-Site": "same-site", 
        "TE": "trailers",
    },
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
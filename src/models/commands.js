const config = require("../config/config")
const honeygain_cookies = config.honeygain_cookies
const genshin_cookies_me = config.genshin_cookies_me
const genshin_cookies_sasha = config.genshin_cookies_sasha


const honeygain_command = ""
const genshin_command_me = ""
const genshin_command_sasha = ""


command_aliases = {
    honeygain_command: "HGC",
    genshin_command_me: "GCM",
    genshin_command_sasha: "GCS",
}


commands_list = {
    "HGC": honeygain_command,
    "GCM": genshin_command_me,
    "GCS": genshin_command_sasha,
}


module.exports = {
    command_aliases,
    commands_list,
}
{
  "name": "princebot",
  "description": "princebot md powered by cyberxkid",
  "logo": "https://i.imgur.com/vwNY4lg.jpeg",
  "repository": "https://github.com/Diegoson/princebot",
  "keywords": ["princebot","Bot","princebot"],
  "env": {
   "SESSION_ID": {
      "description": "session id needed add your session id here",
      "required": false,
      "value": ""
    },
    "SUDO": {
      "description": "sudo numbers with country code Example 923042205427",
      "required": false
    },
    "ANTI_LINK": {
      "description": "true/false",
      "required": false,
      "value": ""
    },
    "HANDLERS": {
      "description": "Prefix",
      "required": false,
      "value": "."
    "PACKNAME": {
      "description": "Sticker Packname required Example princebot",
      "required": false
    },
    "RMBG_KEY": {
      "description": "Remove bg api key required get it here(https://www.remove.bg/api)",
      "required": false,
      "value": ""
    },
    "AUTHOR": {
      "description": "Sticker Pack AUTHOR required Example Diegoson",
      "required": false
    },
    "ALIVE_LOGO": {
      "description": "Add your logo link to alive message",
      "required": false,
      "value": "https://i.imgur.com/w5wr6c1.jpeg"
    },
    "MODE": {
      "description": "Work Type set public or private",
      "required": false,
      "value": "public"
    },
    "HEROKU_APP_NAME": {
      "description": "Heroku app name, same as above entered",
      "required": true
    },
    "HEROKU_API_KEY": {
      "description": "Heroku account api key, https://dashboard.heroku.com/account",
      "required": true
    }

},
"buildpacks": [

  {

      "url": "heroku/nodejs"

  },

  {

      "url": "https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest"

  },

  {

      "url": "https://github.com/clhuang/heroku-buildpack-webp-binaries.git"

  }

]
}

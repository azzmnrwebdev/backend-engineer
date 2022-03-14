(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1641731587671
//APP_KEY=7Hbs3LBDzFowgWuYZs0UFecRtTgWXm09K8mDvjJUlznDUP7nWY2O-Y4G-GB4swzWt2a8KQlgdVU0r3ZKcufdPQ
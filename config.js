//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2349076810086";
global.sudo = process.env.SUDO || "2348109243618,2349076810086,2349012640680";
global.owner = process.env.OWNER_NUMBER || "2349076810086";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xvcXRrOElONERIK3JQVnMvNVd6ejV0Qk0vTkdDQlBZY0UyK1VCM0tuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYndLeW5XNlRRNzloTUZsZ3BQUVRSN0cwSTNSdlh1em13eTIyOTUzaGdYbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRXlmbTVpcGs3TUMvT09DTzE4Y2xCR2ovcUtEWUlvamZNWUlVMERlWGxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmc3h4UWVRcWNmM09pUkx3QU9NRlZZQTNRZXVmMnNDZjdOaDlvZThLTlQ4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVGRktuRy95MnlSQ3V1ZGR4Q2Z2R2lnYU54Mjh0c3lsYmowTXI5blFtVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijhmd3BEMWJEREJYSjVLaERzWWlUNytTRVpmSy9PMkhiRyt0N3FkNk9CQ3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dZQzZhaSt4QVltVzlWdjRBdlFCVHM4UWdrTUphdlRIaGhmT05MOGFuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEhjK3l2NUtSMk9FelYvMm5wWW1MZmtod2FucGJJeVUxRGtDUjhCNEl3ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVZMUNBQWZCWU92djJST3U1YTh5QW5iTHNiSlZWK2tNM1IvYVoxaDZZaXpybkZoRldRVXJhQmFTeDh6QmsxSWNPYVBIYzI2WDJ3MXQ5eDhlelR2NGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiJXclduM0haSnhSblV0WlNBRVZLa29Ja0Ewd0R6bzFZcFJYVUwvbC8yVGs0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNzY4MTAwODZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDMyOUY2NDI2NDE4RDJEMDk5RjM3RTA0RkEzQUQ3QUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNjg2MjAyN30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA3NjgxMDA4NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1NDMxNjkxOTVFNkQyNEJCMzVCMjNFOTJBOUFFRUY4NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2ODYyMDI3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWTGxuWVVMZVNjNkJUNjlkRkZ2bVVBIiwicGhvbmVJZCI6ImMyYzg2NTM1LTAxNzYtNDhiNC1hYmRhLTljODRlNzEzZWI2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnMlhyN09SbWFHb1FOeHJ0TGFHTENCdW5QclE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakV1SkhBbXJIK1JxUDFFNFFPRzRNTHBxc0hNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVGSFpaM0ZOIiwibWUiOnsiaWQiOiIyMzQ5MDc2ODEwMDg2OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsqcyarhtI3wk4O14oGpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQejRtbzhDRUxuU21id0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFU29mWXJTbWVJVnNtdE5BbGJGeDA2VGNIL095WGJIaGpzSUpLL0xqSXdvPSIsImFjY291bnRTaWduYXR1cmUiOiJncUZwUG5GTll6dUJGSWhqTWZvTEJjNE9DbDdTTkJWaFI3UEFJY1ZJVFdNMG93THlQYiszSXB6aDlqRlZBdExOQUtncWZtbU9Eby9pQzBQUDFOWTZBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTFhFell5OWo1SUszeVUxTkFPK1FadUVzZDgyMUxsUkpLOUNYWDBSblE1RDdrRW0wV0JuTE1GTm5GdGNyYUdhK1pISERYU1g4TzZCZS9yeFAwNTNzaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDc2ODEwMDg2OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJFcUgySzBwbmlGYkpyVFFKV3hjZE9rM0IvenNsMng0WTdDQ1N2eTR5TUsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY4NjIwMjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVRGIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "ʜɪᴍ𓃵⁩",
  packname: process.env.PACK_NAME || "ᴏɴʟʏ1",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "ʜɪᴍ𓃵⁩",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

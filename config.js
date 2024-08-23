const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "923486375376" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923486375376";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_14_08_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDM0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgODcsXG4gICAgICAgIDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDcwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg1LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMixcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTY0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU3LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAwLFxuICAgICAgICA3NixcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk4LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAzMCxcbiAgICAgICAgOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ3dRYTNBdURKK004ZFFSbHlFOXlHUFkwOVQ5diswQzZwR2ZmcTZneXpUQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibUl5dUZGM2JTalc3OXNnLURMRklvd1wiLFxuICBcInBob25lSWRcIjogXCI1NWZiN2I2OC04ODU0LTRiNTItOTA3MS1lZDViZjc1NmMwNjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMjAsXG4gICAgICAxMTYsXG4gICAgICAxMTYsXG4gICAgICA0OSxcbiAgICAgIDEzMixcbiAgICAgIDI1LFxuICAgICAgNixcbiAgICAgIDEwMyxcbiAgICAgIDc2LFxuICAgICAgOTAsXG4gICAgICAzMCxcbiAgICAgIDE3NixcbiAgICAgIDEwNixcbiAgICAgIDUsXG4gICAgICA3MSxcbiAgICAgIDI2LFxuICAgICAgMTIzLFxuICAgICAgMjA5LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICAxODYsXG4gICAgICA0OCxcbiAgICAgIDc4LFxuICAgICAgOTcsXG4gICAgICA0OCxcbiAgICAgIDYsXG4gICAgICAxNzUsXG4gICAgICAyMyxcbiAgICAgIDE5LFxuICAgICAgMjE3LFxuICAgICAgNzYsXG4gICAgICA1NixcbiAgICAgIDE0MSxcbiAgICAgIDI0LFxuICAgICAgNDksXG4gICAgICA5MixcbiAgICAgIDI0NixcbiAgICAgIDIsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRFVnY01GRU5tWmpMWUdHQmtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9BbjhRc1RPajlXRTdhOEE1bnhHRHp6Zkt5RFJBZHB3R0M1akxBRDVybkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN0ROa0p0UStsOXJMSHNROXM1UHVjWWY5NXk1bEtiemUrejVrTTZ1a2ZpZEpKNWJHTXBhRmM3WDhEeTZEUEVlVmhMUVdQSGVUaW5KZDVqY1hUellpQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicnRERjduWWtwYzlSK2RIQlpoSHJpdDBwQTB6TnJvanIxMmJ4emNqTit2RndOZ1NGcUszTnl1dVVRMmpHTTlXS0NVSTAyTmp2V1luTC8zbDh2bHRzREE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0ODYzNzUzNzY6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3ODMwOTk4ODUwNzY2OTo0OEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ4NjM3NTM3Njo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNDA1ODg0NlxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-X-Md",
  ownername:process.env.OWNER_NAME|| "ZAHIR",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

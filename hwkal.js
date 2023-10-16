// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://youtube.com/@elkizyy'
global.ig = '@roqiebalhsan'
global.email = 'kizyy4u@gmail.com'
global.region = 'indonesia'
global.ownername = 'Kizyy'
global.owner = ['6283840910227'] 
global.keyopenai = ''
global.botname = 'Kizyy Bot' 
global.packname = 'Mas Kizyy' 
global.author = '1S' 
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'session' 
global.sp = '⭔'
global.wlcm = []
global.wlcmm = []
global.anticall = true
//Limit
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//Batas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
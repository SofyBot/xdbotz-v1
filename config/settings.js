const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['01159250900'] // no own
global.author = 'ايتوشي رين|ITOSHI RIN' // nama author 
global.packname = 'ايتوشي رين|ITOSHI RIN' // nama pack sticker
global.namabot = 'XD BOTZ' // nama bot mu
global.group = 'https://bit.ly/3ZI51Qk' // grup mu
global.pic = 'https://telegra.ph/file/b96926809d93d9f045777.jpg' // logo bot



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})

const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['01159250900'] // no own
global.author = 'ITOSHI RIN|ايتوشي رين' // nama author 
global.packname = 'ITOSHI RIN|ايتوشي رين' // nama pack sticker
global.namabot = 'Golden_ITOSHI' // nama bot mu
global.group = 'https://bit.ly/3ZI51Qk' // grup mu
global.pic = 'https://telegra.ph/file/b96926809d93d9f045777.jpg' // logo bot



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})

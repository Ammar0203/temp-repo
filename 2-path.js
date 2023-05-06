const path = require('path')

console.log(path.sep)

const filePath = path.join('/nothing','stillnothing','hello.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'nothing', 'stillnothing', 'hello.txt')
console.log(absolute)
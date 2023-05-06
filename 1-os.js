const os = require('os')

const user = os.userInfo()
console.log(user)

const uptime = os.uptime()
console.log("The PC is on for: " + uptime + " sec")

const currentOS = {
  name: os.type(),
  relaese: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./nothing/stillnothing/hello.txt', 'utf8')
// console.log(first)

// writeFileSync('./nothing/stillnothing/hey.txt', `Fuck you my man i hate you`)

// const second = readFileSync('./nothing/stillnothing/hey.txt', 'utf-8')
// console.log('\n'+second)

// writeFileSync(
//   './nothing/stillnothing/hey.txt', 
//   `\nFuck you my man i hate you for the second time`, 
//   {flag: 'a'}
// )

// const third = readFileSync('./nothing/stillnothing/hey.txt', 'utf-8')
// console.log('\n'+third)



const {readFile, writeFile} = require('fs')

readFile('./nothing/stillnothing/hello.txt', 'utf8', (err, res)=>{
  if(err){
    console.log(err); return
  }
  console.log(res)

  writeFile('./nothing/stillnothing/hey.txt', `Fuck you my man i hate you`, (err, res)=>{
    if(err){
      console.log(err); return
    }
    readFile('./nothing/stillnothing/hey.txt', 'utf8', (err, res)=>{
      if(err){
        console.log(err); return
      }
      console.log('\n'+res)
      
      writeFile(
        './nothing/stillnothing/hey.txt', 
        `\nFuck you my man i hate you for the second time`, 
        {flag: 'a'},
        (err, res)=>{
          if (err) {
            console.log(err); return
          }
          readFile('./nothing/stillnothing/hey.txt', 'utf-8', (err, res)=>{
            if(err) {
              console.log(err); return
            }
            console.log('\n'+res)
          })
        }
      )
    })
  })
})

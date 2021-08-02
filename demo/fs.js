const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'test', 'test.txt')

fs.readFile(filePath,'UTF-8', (err, content) => {
    if (err){
        throw err
    }
    console.log('content: ', content)
  /*  const data = Buffer.from(content)
    console.log('content: ', data.toString())*/
})

/*
fs.writeFile(filePath, 'hello FS', (err) => {
    if (err) {
        throw err
    }

    console.log('Файл создан')
})
*/
/*
fs.mkdir(path.join(__dirname, 'test'), (err)=>{
    if(err) {
        throw err
    }

    console.log('папка создана')
})
*/
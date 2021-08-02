const path = require('path')

console.log('File name', path.basename(__filename))

console.log('Dir name', path.dirname(__filename))

console.log('File is ', path.extname(__filename))

console.log('Parse:', path.parse(__filename).name)

console.log(path.join(__dirname, 'inside', 'index.html'))
const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.filter(function (file) {
    //argv[3] is the item that is wanted to be kept by the loop like md or txt
    return path.extname(file) === '.' + process.argv[3]
    //for each is a loop that plays thru every file that is left after the filter 
  }).forEach(function (file) {
    console.log(file)
  })
})

    
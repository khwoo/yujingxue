const path = require('path')
console.log('next Config Js')
console.log(path.join(__dirname, 'styles'))
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    compiler: {
        styledComponents: true
    }
}

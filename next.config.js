const path = require('path')
console.log('next Config Js')
console.log(path.join(__dirname, 'styles'))
module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    compiler: {
        styledComponents: true
    },
    env: {
        customValue: 'khwoo'
    }
}

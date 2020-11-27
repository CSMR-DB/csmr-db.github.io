const config = require('./jest.config')

config.testRegex = '(integration.(test|spec))\\.([jt]sx?)$'

console.log('RUNNING INTEGRATION TESTS')

module.exports = config

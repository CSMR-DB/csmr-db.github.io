const config = require('./jest.config')

config.preset = 'jest-puppeteer'

config.testRegex = '(e2e.(test|spec))\\.([jt]sx?)$'

config.setupFiles = []
config.setupFilesAfterEnv = [`<rootDir>/jest-setup-jest-puppeteer.js`]

config.verbose = true

console.log('RUNNING END 2 END TESTS')

module.exports = config

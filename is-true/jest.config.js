const packageJson = require('./package');

module.exports = {
  name: packageJson.name,
  displayName: packageJson.name,
  clearMocks: true,
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true,
}

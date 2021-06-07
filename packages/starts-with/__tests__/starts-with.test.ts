const startsWith: any = require('../src/starts-with')

describe('starts with assertion', () => {
  it('matches when string starts with expected value', () => {
    expect(startsWith('Hello', 'Hello, World!').pass).toBe(true)
  })

  it('does not match when string contains expected value after start', () => {
    expect(startsWith('Goodbye', 'Hello, World!').pass).toBe(false)
  })

  it('matches when number starts with expected value', () => {
    expect(startsWith(10, 100).pass).toBe(true)
  })
})

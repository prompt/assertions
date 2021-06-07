const isEqual: any = require('../src/is-strictly-equal')

describe('equality assertion', () => {
  it('matches two equal strings', () => {
    expect(isEqual('Hello, World!', 'Hello, World!').pass).toBe(true)
  })

  it('matches two equal numbers', () => {
    expect(isEqual(1, 1).pass).toBe(true)
  })

  it('does not match two different types with same value', () => {
    expect(isEqual('1', 1).pass).toBe(false)
  })
})

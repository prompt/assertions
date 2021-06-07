const isStrictlyEqual: any = require('../src/is-strictly-equal')

describe('equality assertion', () => {
  it('matches two equal strings', () => {
    expect(isStrictlyEqual('Hello, World!', 'Hello, World!').pass).toBe(true)
  })

  it('matches two equal numbers', () => {
    expect(isStrictlyEqual(1, 1).pass).toBe(true)
  })

  it('does not match two different types with same value', () => {
    expect(isStrictlyEqual('1', 1).pass).toBe(false)
  })
})

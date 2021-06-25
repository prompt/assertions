const isEqual: any = require('../src/is-equal')

describe('weak equality assertion', () => {
  it('matches two equal strings', () => {
    expect(isEqual('Hello, World!', 'Hello, World!').pass).toBe(true)
  })

  it('matches two equal numbers', () => {
    expect(isEqual(1, 1).pass).toBe(true)
  })

  it('matches two different types with same value', () => {
    expect(isEqual('1', 1).pass).toBe(true)
  })

  it('does not match different values', () => {
    expect(isEqual('Hello, World!', 'Goodbye, World!').pass).toBe(false)
  })
})

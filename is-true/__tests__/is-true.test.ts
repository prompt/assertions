const isTrue: any = require('../src/is-true')

describe('is true assertion', () => {
  it('does not pass when actual is not a string', () => {
    const nonStringValues: any = [true, 1, ['true'], false, 0, 1.2, [1]]
    expect.assertions(nonStringValues.length)

    nonStringValues.forEach((value: any) => {
      expect(isTrue(null, value).pass).toBe(false)
    })
  })

  it('does not pass when actual is a string of wrong value', () => {
    expect(isTrue(null, 'false').pass).toBe(false)
    expect(isTrue(null, 'nope').pass).toBe(false)
    expect(isTrue(null, 'correct').pass).toBe(false)
    expect(isTrue(null, 'tRuE').pass).toBe(false)
  })

  it('passes when value is one of YAMLs true values', () => {
    expect(isTrue(null, 'true').pass).toBe(true)
    expect(isTrue(null, 'True').pass).toBe(true)
    expect(isTrue(null, 'TRUE').pass).toBe(true)
  })

  it('throws error when explicit expected is given', () => {
    expect(() => {
      isTrue('true', 'true')
    }).toThrow(RangeError)

    expect(() => {
      isTrue(true, 'true')
    }).toThrow(RangeError)

    expect(() => {
      isTrue('', 'true')
    }).toThrow(RangeError)
  })
})

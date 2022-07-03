const equivalentHtml: any = require('../src/equivalent-html')

describe('equivalent HTML assertion', () => {
  it('ignores whitespace', () => {
    expect(equivalentHtml('<html></html>', '<html>  </html>').pass).toBe(true)
  })

  it('considers different element contents to be different elements', () => {
    expect(
      equivalentHtml(
        '<html>Hello, World!</html>',
        '<html>Goodbye, World!</html>'
      ).pass
    ).toBe(false)
  })

  it('compares element tags case-insensitively', () => {
    expect(equivalentHtml('<HTML></HTML>', '<html></html>').pass).toBe(true)
  })

  it('compares element contents case-sensitively', () => {
    expect(
      equivalentHtml('<html>HELLO</html>', '<html>hello</html>').pass
    ).toBe(false)
  })

  it('compares contents case-sensitively', () => {
    expect(
      equivalentHtml('<html>HELLO</html>', '<html>hello</html>').pass
    ).toBe(false)
  })
})

// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const HtmlDiffer = require('html-differ').HtmlDiffer

interface Result {
  pass: boolean
  message: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function equivalentHtml(expected: any, actual: any): Result {
  return {
    pass: new HtmlDiffer().isEqual(expected, actual),
    message: `tested ${expected} and ${actual} are equivalent HTML`
  }
}

export = equivalentHtml

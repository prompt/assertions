interface Result {
  pass: boolean
  message: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function startsWith(expected: any, actual: any): Result {
  return {
    pass: String(actual).startsWith(String(expected)),
    message: `tested ${actual} starts with ${expected}`
  }
}

export = startsWith

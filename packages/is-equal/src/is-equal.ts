interface Result {
  pass: boolean
  message: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isEqual(expected: any, actual: any): Result {
  return {
    // eslint-disable-next-line eqeqeq
    pass: actual == expected,
    message: `compared ${actual} to ${expected}`
  }
}

export = isEqual

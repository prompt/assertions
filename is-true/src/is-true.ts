interface Result {
  pass: boolean
  message: string
}

const trueValues: string[] = ['true', 'True', 'TRUE']

function isTrue(expected: unknown, actual: unknown): Result {
  if (expected !== null) {
    throw new RangeError(
      '`expected` is not accepted as it is always implicitly `true` for this assertion'
    )
  }

  if (typeof actual !== 'string') {
    return {
      pass: false,
      message: `${typeof actual} ${actual} is not a string`
    }
  }

  return {
    pass: trueValues.includes(String(actual)),
    message: `compared ${actual} to each of ${trueValues.join(',')}`
  }
}

export = isTrue

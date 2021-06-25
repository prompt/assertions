import {existsSync, lstatSync, Stats} from 'fs'

interface Result {
  pass: boolean
  message: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function directoryExists(expected: any, actual: any): Result {
  if (!!actual) {
    throw new RangeError('directoryExists accepts `expected` not `actual`')
  }

  if (!existsSync(expected)) {
    return {
      pass: false,
      message: `path [${expected}] does not exist`
    }
  }

  const path: Stats = lstatSync(expected)

  if (!path.isDirectory()) {
    return {
      pass: false,
      message: `path [${expected}] exists but is not a directory`
    }
  }

  return {
    pass: true,
    message: `directory [${expected}] found`
  }
}

export = directoryExists

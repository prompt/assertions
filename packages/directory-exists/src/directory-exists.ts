import {existsSync, lstatSync, Stats} from 'fs'

interface Result {
  pass: boolean
  message: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function directoryExists(_: any, actual: any): Result {
  if (!existsSync(actual)) {
    return {
      pass: false,
      message: `path [${actual}] does not exist`
    }
  }

  const path: Stats = lstatSync(actual)

  if (!path.isDirectory()) {
    return {
      pass: false,
      message: `path [${actual}] exists but is not a directory`
    }
  }

  return {
    pass: true,
    message: `directory [${actual}] found`
  }
}

export = directoryExists

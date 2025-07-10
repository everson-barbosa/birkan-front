const SUCCESS_PREFIX = '✅'
const ERROR_PREFIX = '❌'

export class Logger {
  static getIndentText({ indent }) {
    return Array.from({ length: indent }).fill(' ').join('')
  }

  static info({ text, prefixIndent = 0 }) {
    const prefixIndentText = this.getIndentText({ indent: prefixIndent })
    const log = [prefixIndentText, text].join(' ')

    console.log(log)
  }

  static success({ text, prefixIndent = 0 }) {
    const prefixIndentText = this.getIndentText({ indent: prefixIndent })
    const log = [prefixIndentText, SUCCESS_PREFIX, text].join(' ')

    console.log(log)
  }

  static error({ text, error, prefixIndent = 0 }) {
    const prefixIndentText = this.getIndentText({ indent: prefixIndent })
    const log = [prefixIndentText, ERROR_PREFIX, `${text}:`,  error.message].join(' ')

    console.error(log)
  }
}
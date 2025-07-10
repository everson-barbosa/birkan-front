import fs from 'fs'
import obfuscator from 'javascript-obfuscator'
import path from 'path'
import { loadSync } from 'sorcery'
import { fileURLToPath } from 'url'

import { Logger } from '../logger.js'

const INFO_LOG_INDENT = 4
const SUCCESS_LONG_INDENT = 8
const DANGER_LONG_INDENT = 8

function getFiles({ filesPath }) {
  Logger.info({ text: 'Reading files...' })

  try {
    const files = fs
      .readdirSync(filesPath)
      .filter((file) => file.endsWith('.js')) // Find all javascript files on assets path
      .filter((file) => !file.startsWith('vendor'))

    return files
  } catch (error) {
    Logger.error({ text: 'Error trying to read the files:', error })

    process.exit(1) // End process as error
  }
}

function getSourceCode({ sourceCodePath }) {
  Logger.info({
    text: '📄 Reading sourcecode...',
    prefixIndent: INFO_LOG_INDENT,
  })

  try {
    const sourceCode = fs.readFileSync(sourceCodePath, 'utf8') // Return text value from a file, in this case, source code

    Logger.success({
      text: 'Sourcecode read successfully',
      prefixIndent: SUCCESS_LONG_INDENT,
    })

    return sourceCode
  } catch (error) {
    Logger.error({
      text: 'Error trying to read sourcecode',
      prefixIndent: DANGER_LONG_INDENT,
      error,
    })

    process.exit(1)
  }
}

function obfuscateSourceCode({ sourceCode }) {
  Logger.info({
    text: '🔒 Obfuscating sourcecode...',
    prefixIndent: INFO_LOG_INDENT,
  })

  try {
    const obfuscationResult = obfuscator.obfuscate(sourceCode, {
      sourceMap: true,
      sourceMapMode: 'inline',
      compact: true,
      deadCodeInjection: true,
      selfDefending: true,
    })

    Logger.success({
      text: 'Sourcecode obfuscated successfully',
      prefixIndent: SUCCESS_LONG_INDENT,
    })

    const obfuscatedSourceCode = obfuscationResult.getObfuscatedCode()
    const obfuscatedSourceMap = JSON.parse(obfuscationResult.getSourceMap())

    return { obfuscatedSourceCode, obfuscatedSourceMap }
  } catch (error) {
    Logger.error({
      text: 'Error trying to obfuscate sourcecode',
      prefixIndent: DANGER_LONG_INDENT,
      error,
    })

    process.exit(1) // End process as error
  }
}

function writeObfuscateSourceCode({ sourceCodePath, obfuscatedSourceCode }) {
  Logger.info({
    text: '📝 Writting obfuscated sourcecode...',
    prefixIndent: INFO_LOG_INDENT,
  })

  try {
    const obfuscatedsourceCodePath = sourceCodePath.replace(
      /\.js$/,
      '.obfuscated.js'
    )

    fs.writeFileSync(obfuscatedsourceCodePath, obfuscatedSourceCode)

    Logger.success({
      text: 'Obfuscated sourcecode written successfully',
      prefixIndent: SUCCESS_LONG_INDENT,
    })
  } catch (error) {
    Logger.error({
      text: 'Error trying to write sourcecode',
      prefixIndent: DANGER_LONG_INDENT,
      error,
    })

    process.exit(1) // End process as error
  }
}

function writeObfuscateSourceMap({ sourceMapPath, obfuscatedSourceMap }) {
  Logger.info({
    text: '📝 Writting obfuscated sourcemap...',
    prefixIndent: INFO_LOG_INDENT,
  })

  try {
    const obfuscatedSourceMapPath = sourceMapPath.replace(
      /\.js.map$/,
      '.obfuscated.js.map'
    )

    fs.writeFileSync(
      obfuscatedSourceMapPath,
      JSON.stringify(obfuscatedSourceMap)
    )

    Logger.success({
      text: 'Obfuscated sourcemap written successfully',
      prefixIndent: SUCCESS_LONG_INDENT,
    })
  } catch (error) {
    Logger.error({
      text: 'Error trying to write sourcemap',
      prefixIndent: DANGER_LONG_INDENT,
      error,
    })

    process.exit(1) // End process as error
  }
}

function chainSourceMap({ sourceCodePath }) {
  Logger.info({
    text: '⛓️  Chaining code...',
    prefixIndent: INFO_LOG_INDENT,
  })

  try {
    const obfuscatedsourceCodePath = sourceCodePath.replace(
      /\.js$/,
      '.obfuscated.js'
    )

    const chain = loadSync(obfuscatedsourceCodePath)

    chain.writeSync()

    Logger.success({
      text: 'Chained code successfully',
      prefixIndent: SUCCESS_LONG_INDENT,
    })
  } catch (error) {
    Logger.error({
      text: 'Error trying to chain code',
      prefixIndent: DANGER_LONG_INDENT,
      error,
    })
    process.exit(1)
  }
}

function replaceOriginalFileByObfuscatedFile({
  file,
  sourceCodePath,
  sourceMapPath,
}) {
  Logger.info({
    text: '🧪 Replacing original code by obfuscated file...',
    prefixIndent: INFO_LOG_INDENT,
  })

  try {
    const obfuscatedsourceCodePath = sourceCodePath.replace(
      /\.js$/,
      '.obfuscated.js'
    )
    const obfuscatedSourceMapPath = sourceMapPath.replace(
      /\.js.map$/,
      '.obfuscated.js.map'
    )

    const obfuscatedSourceCode = fs.readFileSync(
      obfuscatedsourceCodePath,
      'utf8'
    )
    const obfuscatedSourceMap = fs.readFileSync(obfuscatedSourceMapPath, 'utf8')

    // Link source code with source map name
    const processedObfuscatedSourceCode = obfuscatedSourceCode.replace(
      /^\s*\/\/# sourceMappingURL=.*$/m,
      `//# sourceMappingURL=${file}.map`
    )
    // Link source map with source code name
    const processedObfuscatedSourceMap = {
      ...JSON.parse(obfuscatedSourceMap),
      file,
    }

    fs.rmSync(sourceCodePath)
    fs.rmSync(sourceMapPath)

    fs.writeFileSync(sourceCodePath, processedObfuscatedSourceCode)
    fs.writeFileSync(
      sourceMapPath,
      JSON.stringify(processedObfuscatedSourceMap)
    )

    fs.rmSync(obfuscatedsourceCodePath)
    fs.rmSync(obfuscatedSourceMapPath)

    Logger.success({
      text: 'Replaced original file by obfuscated file',
      prefixIndent: SUCCESS_LONG_INDENT,
    })
  } catch (error) {
    Logger.error({
      text: 'Error trying to replace original file for obfuscated file',
      prefixIndent: DANGER_LONG_INDENT,
      error,
    })

    process.exit(1)
  }
}

/**
 * @description Obfuscate code while keeping the sourcemap track of development code
 */
export async function obfuscate() {
  const __filename = fileURLToPath(import.meta.url) // Get current file path
  const __dirname = path.dirname(__filename) // Get current directory name by file
  const filesPath = path.join(__dirname, '../../', 'dist', 'assets') // Get assets path

  const files = getFiles({ filesPath })

  for (const file of files) {
    Logger.info({ text: `- ${file}` })

    const sourceCodePath = path.join(filesPath, file) // Join the path with current file, eg: host/dist/assets/filename.js
    const sourceMapPath = `${sourceCodePath}.map` // Get source map from current file, eg: host/dist/assets/filename.js.map

    const sourceCode = getSourceCode({ sourceCodePath })
    const obfuscationResult = obfuscateSourceCode({ sourceCode })
    const { obfuscatedSourceCode, obfuscatedSourceMap } = obfuscationResult

    writeObfuscateSourceCode({ sourceCodePath, obfuscatedSourceCode })
    writeObfuscateSourceMap({ sourceMapPath, obfuscatedSourceMap })
    chainSourceMap({ sourceCodePath })
    replaceOriginalFileByObfuscatedFile({ file, sourceCodePath, sourceMapPath })
  }
}



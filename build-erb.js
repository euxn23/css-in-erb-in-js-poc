const fs = require('fs')
const { resolve, relative, dirname, basename, extname } = require('path')
const { readdirRecursivelySync } = require('readdir-recursively-sync')

const baseDir = resolve(__dirname, 'app/views')
const erbJsPaths = readdirRecursivelySync(baseDir).filter(
  p => extname(p) === '.js'
)

erbJsPaths.forEach(erbJsPath => {
  const requirePath = `./${relative(__dirname, erbJsPath)}`
  const erbJs = require(requirePath)
  const erb = erbJs()
  const outputPath = `${dirname(erbJsPath)}/${basename(erbJsPath, '.js')}`
  console.log(outputPath)
  fs.writeFileSync(outputPath, erb)
})

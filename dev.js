const chokidar = require('chokidar')
const shelljs = require('shelljs')

const watcher = chokidar.watch('.', {
  ignored: ['node_modules', 'dist', 'types', 'package.json'],
})

watcher.on('change', () => {
  console.log('👷 Rebuilding...')
  shelljs.exec('rollup -c')
  console.log('✔️ Built successfully.')
})

console.log('👀 Watching for changes...')

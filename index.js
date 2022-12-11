const {copyAssets, compileHTML} = require('./compiler/compiler-functions')

const run = () => {
    copyAssets(__dirname)
    compileHTML(__dirname)
}

if (process.env.WATCH) {
    setInterval(run, 1000)
} else {
    run()
}
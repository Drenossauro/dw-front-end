const fs = require('fs');

const copyAssets = (path) => {
    fs.readdir(`${path}/site/images`, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            fs.copyFile(`site/images/${file}`, `output/images/${file}`, (err) => {
                if (err) {
                    console.log('Erro ao transferir arquivos')
                    throw err;
                }
            })
        })
    })

    const othersFiles = ['style.css', 'script.js']
    othersFiles.forEach(file => {
        fs.copyFile(`site/${file}`, `output/${file}`, (err) => {
            if (err) {
                console.log('Erro ao transferir arquivos')
                throw err;
            }
        })
    })
}

const compileHTML = (path) => {
    const SEARCH_TAG_HTML = '<main>'
    let screens = []

    const mainHTML = fs.readFileSync(`${path}/site/index.html`, {encoding: 'utf-8'})

    fs.readdir(`${path}/site/screens`, (err, screensFolders) => {
        screensFolders.forEach((screen, index) => {
            screens[index] = fs.readFileSync(`${path}/site/screens/${screen}/screen.html`, {encoding: 'utf-8'})
        })

        const compiledScreens = screens.reduce(
            (acumulador, screen) => acumulador + screen
        )

        const searchValue = SEARCH_TAG_HTML
        const newValue = searchValue + compiledScreens

        const compiledHTML = mainHTML.replace(searchValue, newValue)
            .replace(/(\r\n|\n|\r)/gm, "")
            .replace(/\s{2,}/g, ' ')

        fs.writeFile('output/output.html', compiledHTML, function (err) {
            if (err) throw err;
            console.log('HTML compilado: output/output.html');
        });
    })
}

module.exports = {
    copyAssets,
    compileHTML,
}
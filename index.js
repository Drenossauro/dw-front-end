const fs = require('fs');

// copy assets to output

fs.copyFile('site/images', 'output/images', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
});

// get screens and content

// compile screens with content
const fs = require('fs');

const dir = process.argv[2];

fs.watch(dir, (event, filename) => {
    if (filename.charAt(filename.length - 1) !== '~') {
        console.log(`File: ${filename} \nEvent: ${event}`);

        if (event === 'change') {
            fs.readFile(dir + filename, (err, data) => {
                if (err) console.log(err.toString());
                else console.log(data.toString());
            })
        }
    }
});

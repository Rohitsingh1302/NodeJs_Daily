const {pipeline} = require('stream/promises');
const fs=require('fs');
const zlib=require('zlib');
async function run(){
    await pipeline(
        fs.createReadStream('examplee.txt'),
        zlib.createGzip(),
        fs.createWriteStream('examplee.txt.gz')
    );
    console.log('File Compressed');
}
run();
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
// Output:
// File Compressed
// After running this code, you will find a new file named 'examplee.txt.gz' in the same directory, which is the compressed version of 'examplee.txt' using Gzip compression.   
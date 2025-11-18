//import fs from 'fs';
//import zlib from 'zlib';

const fs = require('fs');
const zlib = require('zlib');   

const compressedData = fs.readFileSync('examplee.txt.gz');
zlib.gunzip(compressedData,(err, decompressedBuffer) => {
    if (err) {
        console.error('Error during decompression:', err);
        return;
    }
    console.log('Decompressed Data:', decompressedBuffer.toString());
});
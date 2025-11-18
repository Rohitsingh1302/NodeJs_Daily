const fs=require("fs");
fs.writeFileSync("example.txt","Hello World");
const data=fs.readFileSync("example.txt","utf-8");
console.log(data);
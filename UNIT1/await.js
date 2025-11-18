async function myLogic() {
    await new Promise((resolve,reject) => {setTimeout(()=>{
        console.log("WELCOME TO LPU");
        resolve();
    },1000);
})
}
async function lpu(){
console.log("Start");
await myLogic();
console.log("End");
}
lpu();

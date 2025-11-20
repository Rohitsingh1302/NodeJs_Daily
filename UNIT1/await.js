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
// Output way:
// When you run this code, you will see the following output in the console:
// Start
// (after 1 second delay) WELCOME TO LPU
// End
// This demonstrates the use of async/await to handle asynchronous operations in JavaScript.

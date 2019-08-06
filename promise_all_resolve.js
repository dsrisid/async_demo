/* This script is to prove the use of Promise.all method
 * Promise.all method is executed after all the promises in the array of
 * promises provide to the Promise.all method are resolved.
 * this method will return the values of all the promise as an array.
 Promise.all().then() is only invoked if all the promises are resolved with success*/
const p1 = new Promise((resolve)=>{
  setTimeout(()=>{
    console.log("Promise1 resolved...");
    resolve(1);
  },2000);
});

const p2 = new Promise((resolve)=>{
  setTimeout(()=>{
    console.log("Promise2 resolved....");
    resolve(2);
  },2000);
});

Promise.all([p1,p2]).then(result=>console.log(result));

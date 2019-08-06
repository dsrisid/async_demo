/** If any one of the promise which is part of Promise.race returns then Promise.race returns that
value and terminates. */
const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Promise P1");
    resolve(1);
  },2000)
});

const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      console.log("Promise P2");
      resolve(2);
  },2000);
});

Promise.race([p1,p2])
.then(result=>console.log(result))
.catch(err=>console.log(err));

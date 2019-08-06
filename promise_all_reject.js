/** If any one of the promised which is part of Promise.All returns an error,
* then promise.all will return an error */
const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Promise P1");
    reject(new Error("test"));
  },2000)
});

const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      console.log("Promise P2");
      resolve(2);
  },2000);
});

Promise.all([p1,p2])
.then(result=>console.log(result))
.catch(err=>console.log(err));

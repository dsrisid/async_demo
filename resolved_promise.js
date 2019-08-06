const p = Promise.resolve({id:1,name:"temp"});
p.then(result => console.log(result));

//when we pass the error object we will get the full stack trace when we print
// the error. Otherwise we get only the error msg and no stack.
const x = Promise.reject(new Error("rejection reason..."));
x.catch(err=>console.log(err));


const y = Promise.reject("rejection reason...");
y.catch(err=>console.log(err));

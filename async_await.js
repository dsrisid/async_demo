/*modifying to use lambda
Instead of chaining the promise calls, we could use async await to accomplish this
If a function uses await that function must be declared as async.
When we use await with on a function call which returns a promise, we will wait till we recive teh response
from the promise.
async function returns a promise.
If we use await, to capture any errors, we need to wrap the code in try catch block.
*/

console.log("before");
// const user = getUserFromDB(1,displayUser);
//
// function displayCommit(commits){
//   console.log(commits);
// }
// function displayUser(user){
//   console.log(user);
//   getRepositories(user.gitHubUserName,displayRepositories);
// }
// function displayRepositories(repositories){
//   console.log(repositories);
//   getCommits(repositories[0],displayCommit);
// }

// getUserFromDB(1)
//   .then(user => getRepositories(user.gitHubUserName))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log("Commits:",commits))
//   .catch(err=>console.log("Error:",err.message));
//   //id an error occurs in any of the above promise calls the catch block is invoked

async function displayCommits(){
  try{
    const user = await getUserFromDB(1);
    const repos = await getRepositories(user.gitHubUserName);
    const commits = await getCommits(repos[0]);
    console.log("Commits:",commits);
  }
  catch(err){
    console.log('Error:',err.message);
  }
}

displayCommits();
console.log("after");

function getUserFromDB(id){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("Reading user from DB...");
      resolve({id:1,gitHubUserName:"mosh"});
    },2000);
  });
}

function getRepositories(userName){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Fetching Repositories...");
      resolve(["repo1","repo2","repo3"]);},2000);
  });
}

function getCommits(repoId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Fetching Commits....");
      resolve(["commit0","commit1"]);
    },2000);
  });
}

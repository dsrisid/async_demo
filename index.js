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

const p = getUserFromDB(1);
p.then(function (user){
  console.log(user);
})
console.log("after");

function getUserFromDB(id){
  return new Promise(function(resolve, reject){
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

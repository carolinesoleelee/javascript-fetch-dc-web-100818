const app = "I don't do much.";
fetch('https://api.github.com/users/repos')
  .then(res => res.json())
  .then(res => console.log(json));

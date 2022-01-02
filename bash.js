process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
  process.cwd();
  // we can access the pwd function and store it in a variable like so
  const pwd = require("./pwd.js");

  // module.exports = function () {
  //   import { cwd } from "process";

  //   console.log(`Current directory: ${cwd()}`);
  // };

  // if a user enters 'pwd' as an argument, we can then call it
  pwd();
});

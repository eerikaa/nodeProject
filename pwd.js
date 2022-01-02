module.exports = function () {
  import { cwd } from "process";

  console.log(`Current directory: ${cwd()}`);
};

const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);

(() => {
  let FROM_METADATA = false;
  if (process.argv[2] == "metadata") {
    FROM_METADATA = true;
  }
  buildSetup();
  startCreating(FROM_METADATA);
})();

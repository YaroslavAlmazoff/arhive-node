const { exec } = require("child_process");
const archiving = (archivePath, folderPath) => {
  const command = `zip -r ${archivePath} ${folderPath}`;
  exec(command, (error, _, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Zip stderr: ${error.message}`);
      return;
    }
    console.log("Folder archived successfully!");
  });
};

archiving("./archive.zip", "./test");

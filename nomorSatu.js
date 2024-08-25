const fs = require("fs");

const fileName = "hello.txt";

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error(`Gagal membaca file: ${err}`);
    return;
  }
  console.log(`Isi file ${fileName}:\n${data}`);
});

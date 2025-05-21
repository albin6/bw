import { Transform } from "stream";
import fs from "fs";

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    let upperTransform = chunk.toString().toUpperCase();
    callback(null, upperTransform);
  },
});

const inputFile = fs.createReadStream("renamedFile.txt", "utf8");
const outFile = fs.createWriteStream("outFile.txt");

inputFile
  .pipe(transformStream)
  .pipe(outFile)
  .on("finish", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("completed");
  });

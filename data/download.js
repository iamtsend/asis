const axios = require("axios");
const fs = require("fs");
const tests = require("./tests");

async function downloadImage(url, filename) {
  const response = await axios.get(url, { responseType: "arraybuffer" });

  fs.writeFile(filename, response.data, (err) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("Image downloaded successfully!");
    }
  });
}

// console.log(tests.tests);
let counter = 1;
const downloadImages = () => {
  tests.data.map((test) => {
    if (test.images) {
      console.log(counter);
      downloadImage(
        `http://test.autosurguuli.com${test.images}`,
        test.images.substring(1)
      );
      counter++;
    }
  });
};
// downloadImages();
console.log(tests.tests.filter((test) => test.images).length);

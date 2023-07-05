// const axios = require("axios");
// const fs = require("fs");
const tests = require("./tests");
const topics = require("./topics");
const answers = require("./answers");
const test_answers = require("./test_answers");

// async function downloadImage(url, filename) {
//   const response = await axios.get(url, { responseType: "arraybuffer" });

//   fs.writeFile(filename, response.data, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       // console.log("Image downloaded successfully!");
//     }
//   });
// }

// console.log(tests.tests);
// let counter = 1;
// const downloadImages = () => {
//   tests.data.map((test) => {
//     if (test.images) {
//       console.log(counter);
//       downloadImage(
//         `http://test.autosurguuli.com${test.images}`,
//         test.images.substring(1)
//       );
//       counter++;
//     }
//   });
// };
// downloadImages();
console.log("topics", topics.data.length);
console.log("tests", tests.data.length);
console.log("answers", answers.data.length);
console.log("test_answers", test_answers.data.length);

console.log("images", tests.data.filter((test) => test.images).length);

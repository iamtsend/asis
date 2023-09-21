require("dotenv").config();
const express = require("express");
const pug = require("pug");

const tests = require("./data/tests");
const topics = require("./data/topics");
const answers = require("./data/answers");
const test_answers = require("./data/test_answers");

const app = express();
const port = process.env.PORT || 1313;
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    topics: topics.data,
  });
});

app.get("/topics/:topicId", (req, res) => {
  const topic = topics.data.filter(
    (topic) => topic.id === req.params.topicId
  )[0];
  const topicTests = tests.data.reduce((acc, cur) => {
    let test = null;
    if (cur.topics_id === topic.id) {
      test = {
        ...cur,
      };
      test.answer_id = answers.data.filter(
        (answer) => answer.test_id === test.id
      )[0].answer_id;
      test.answers = test_answers.data.filter(
        (answer) => answer.test_id === test.id
      );
    }
    if (test) {
      acc.push(test);
    }
    return acc;
  }, []);
  res.render("topic", {
    topic,
    tests: topicTests,
  });
});

app.listen(port);

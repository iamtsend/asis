window.onload = function () {
  const answers = document.querySelectorAll("div.answer");
  answers.forEach((answer) => {
    answer.addEventListener("click", clickEvent);
  });
};
const removeEvents = (node) => {
  node.parentNode.childNodes.forEach((childNode) => {
    childNode.removeEventListener("click", clickEvent);
    if (childNode.classList.contains("correct")) {
      childNode.classList.add("true");
    }
    if (childNode.classList.contains("description")) {
      childNode.classList.add("show");
    }
  });
};
const clickEvent = (e) => {
  if (!e.srcElement.classList.contains("correct")) {
    e.srcElement.classList.add("false");
  }
  removeEvents(e.srcElement);
};

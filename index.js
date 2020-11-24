const title= document.querySelector("#title");
title.innerHTML = "Modified Testbed Enviroment";

const BASE_COLOR = "white";
const OTHER_COLOR ="pink";

function handleClick() {
  const currentColor = title.style.color;
  console. log(currentColor);
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();
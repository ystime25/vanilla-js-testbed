const title= document.querySelector("#title");
title.innerHTML = "Modified Testbed Enviroment";

const CLICKED_CLASS = "clicked";

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);

  /*same as above
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if(hasClass)
  {
    title.classList.remove(CLICKED_CLASS);
  }
  else
  {
    title.classList.add(CLICKED_CLASS);
  }
  */
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para1 = document.createElement("p");
para1.textContent = "Hey I'm red!";
para1.style.color = "red";

container.appendChild(para1);

const heading3 = document.createElement("h3");
heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";

container.appendChild(heading3);

const div = document.createElement("div");
div.classList.add("black");
div.style.border = "solid black 1px";
div.style.backgroundColor = "pink";
div.style.padding = "5px";

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";

div.appendChild(heading1);

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

div.appendChild(para2);

container.appendChild(div);



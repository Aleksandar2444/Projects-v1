const body = document.querySelector("body");
const button = document.querySelector(".button");
const h4 = document.querySelector("h4");

const colors = ["black", "red", "green", "blue", "yellow", "purple", "orange"];

const changeBackgroundColor = () => {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];

  if (body.style.backgroundColor === "black") {
    h4.style.color = "white";
  } else {
    h4.style.color = "black";
  }
};

button.addEventListener("click", changeBackgroundColor);

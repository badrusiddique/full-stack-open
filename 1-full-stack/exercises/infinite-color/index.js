let timeout;

// document.getElementById("start").onclick = () => {
//   timeout = setTimeout(() => {
//     console.log("This message is displayed after 2 seconds");
//     document.getElementById("header").innerHTML =
//       "Welcome to the Barry's Playground App!";
//   }, 3000);
// };

// document.getElementById("stop").onclick = () => {
//   clearTimeout(timeout);
//   console.log("Timeout has been cleared before execution");
// };

// document.getElementById("start").onclick = () => {
//   timeout = setInterval(() => {
//     const time = new Date().toLocaleTimeString();
//     console.log(document.getElementById("time"))
//     document.getElementById("time").innerHTML = `${time}`;
//     console.log("hi", time);
//   }, 1000);
// };

// document.getElementById("stop").onclick = () => {
//   clearInterval(timeout);
//   console.log("Interval has been cleared before execution");
// };

const getRandomColor = () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);

  return `rgb(${x},${y},${z})`;
};

const getRandomColorHex = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

const startChangingColor = () => {
  const changeColor = () => {
    const color = getRandomColorHex();
    console.log("Changing background color to:", color);
    document.querySelector("body").style.backgroundColor = color;
    document.getElementById("color").innerHTML = `Background Color: ${color}`;
  };
  if (!timeout) {
    timeout = setInterval(changeColor, 1000);
    console.log(timeout);
  }
};

document.getElementById("start").onclick = startChangingColor;

document.getElementById("stop").onclick = () => {
  if (timeout) {
    clearInterval(timeout);
    console.log(timeout);
    timeout = null;
  }
  console.log("Interval has been cleared before execution");
};

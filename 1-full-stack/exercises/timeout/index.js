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

document.getElementById("start").onclick = () => {
  timeout = setInterval(() => {
    const time = new Date().toLocaleTimeString();
    console.log(document.getElementById("time"))
    document.getElementById("time").innerHTML = `${time}`;
    console.log("hi", time);
  }, 3000);
};

document.getElementById("stop").onclick = () => {
  clearInterval(timeout);
  console.log("Interval has been cleared before execution");
};

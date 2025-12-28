
const timeout = setTimeout(() => {
  console.log("This message is displayed after 2 seconds");
  document.getElementById("header").innerHTML = "Welcome to the Barry's Playground App!";
}, 5000);

document.getElementById("stop").onclick = () => {
  clearTimeout(timeout);
  console.log("Timeout has been cleared before execution");
};
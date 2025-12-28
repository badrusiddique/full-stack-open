const debouce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!timeoutId) {
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    }
  };
};

const debounceFn = function (func, delay) {
  let timeoutId;

  function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      func(this, args);
    }, delay);
  }

  return debounced;
};

const handleKeyUp = () => {
  const inputValue = document.getElementById("inputField").value;

  // console.log(`You pressed the "${event}" key`, document.getElementById("inputField").value);
  document.getElementById(
    "inputKey"
  ).innerHTML = `Last Key Pressed: ${inputValue}`;
};

document.getElementById("inputField").onkeyup = debounceFn(handleKeyUp, 300);

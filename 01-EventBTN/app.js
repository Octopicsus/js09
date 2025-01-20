function handleButtonClick(buttonId, message) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", () => {
    console.log(message);
  });
}

handleButtonClick('myButton', 'Button clicked!');
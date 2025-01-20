function trackMousePosition() {
  document.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;

    console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
  });
}

trackMousePosition();

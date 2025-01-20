function createTestList() {
  document.body.innerHTML = `
    <ul id="testList">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    `;
}
createTestList();



function setupEventDelegation(selector) {
  const list = document.querySelector(selector);
  let lastClickedItem = null;

  list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      const text = event.target.textContent;

      if (lastClickedItem === event.target) {
        return;
      }
      lastClickedItem = event.target;

      console.log(text);
    }
  });
}

setupEventDelegation("#testList");

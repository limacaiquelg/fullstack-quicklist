const list = document.querySelector("#groceries-list ul");
const warning = document.getElementById("warning-message");

list.addEventListener("click", (event) => {
  const deleteLink = event.target.closest(".delete-link");

  if (deleteLink && list.contains(deleteLink)) {
    event.preventDefault();

    const listItem = deleteLink.closest("li");
    if (listItem) {
      listItem.remove();
    }

    warning.classList.remove("hidden");
  }
});

warning.addEventListener("click", (event) => {
  const closeWarning = event.target.closest("a");

  if (closeWarning && warning.contains(closeWarning)) {
    event.preventDefault();

    warning.classList.toggle("hidden");
  }
});
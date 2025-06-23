function addNewItem(itemText) {
  const list = document.querySelector("#groceries-list ul");

  const newItem = document.createElement("li");
  
  const checkBoxDiv = document.createElement("div");
  
  const checkBoxInput = document.createElement("input");
  checkBoxInput.type = "checkbox";
  checkBoxInput.name = "list";
  const slug = `${String(itemText).replaceAll(" ", "-").toLowerCase()}-${crypto.randomUUID()}`;
  checkBoxInput.id = slug;

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.setAttribute("for", slug);
  checkBoxLabel.innerText = itemText;

  checkBoxDiv.append(checkBoxInput, checkBoxLabel);

  const deleteLink = document.createElement("a");
  deleteLink.role = "button";
  deleteLink.classList.add("delete-link");

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "assets/icons/recycle-bin.svg";
  deleteIcon.alt = "Lixeira";

  deleteLink.append(deleteIcon);

  newItem.append(checkBoxDiv, deleteLink);

  list.append(newItem);
}

const button = document.querySelector("#add-new-item button");

button.addEventListener("click", (event) => {
  event.preventDefault;

  const text = document.getElementById("new-item").value;

  if (text.replace(/\s/g, "").length > 0) { 
    addNewItem(text);
  }
});
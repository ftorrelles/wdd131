const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Add event listener to the button
button.addEventListener("click", function () {
  // 1. verify that the input field is not empty
  if (input.value.trim() !== "") {
    // 2. Create the new elements li and button
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    // 3. add the text content to the li and button
    li.textContent = input.value;
    deleteButton.textContent = "❌";

    // 4. Add the button to the li
    li.append(deleteButton);

    // 5. add the li to the list
    list.append(li);

    // 6. Add an event listener to the delete button
    deleteButton.addEventListener("click", function () {
      li.remove(); // delete the li element
      input.focus(); // return focus to the input field
    });

    // 7. clear the input field
    input.value = "";
  }

  // 8. always return focus to the input field
  input.focus();
});

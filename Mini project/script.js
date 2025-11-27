// Get references to the HTML elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// When the "Add" button is clicked, call the addTask function
addBtn.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  // Get the value from the input box and remove extra spaces
  const taskText = taskInput.value.trim();

  // If the input is empty, show an alert and stop the function
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item (li) element
  const li = document.createElement("li");
  li.textContent = taskText;

  // When the list item is clicked, toggle the "completed" class (mark/unmark as done)
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Create a delete button for each task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.border = "none";
  deleteBtn.style.background = "transparent";
  deleteBtn.style.cursor = "pointer";

  // When the delete button is clicked, remove the task from the list
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Add the delete button inside the list item
  li.appendChild(deleteBtn);

  // Add the new task (li) to the unordered list (ul)
  taskList.appendChild(li);

  // Clear the input box after adding the task
  taskInput.value = "";
}

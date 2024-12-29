document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    // Function to add a new task
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") return alert("Please enter a task!");
  
      const li = document.createElement("li");
  
      // Task Text
      const span = document.createElement("span");
      span.textContent = taskText;
      span.addEventListener("click", () => {
        span.classList.toggle("task-completed");
      });
  
      // Delete Button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete";
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
      });
  
      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      taskInput.value = "";
    };
  
    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addTask();
    });
  });
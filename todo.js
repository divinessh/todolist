function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task first!");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${taskText}</span>
    <div class="actions">
      <button onclick="toggleComplete(this)">✅</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;

  document.getElementById("task-list").appendChild(li);
  input.value = "";
}

function toggleComplete(button) {
  const taskItem = button.parentElement.parentElement;
  taskItem.classList.toggle("completed");
}

function deleteTask(button) {
  const taskItem = button.parentElement.parentElement;
  taskItem.remove();
}

function showEmojiConfetti(emoji = "🎉", count = 20) {
  const container = document.getElementById("confetti-container");

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.classList.add("emoji");
    el.textContent = emoji;
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = Math.random() * 20 + 20 + "vh";
    el.style.animationDuration = (Math.random() * 1.5 + 1.5) + "s";
    container.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 1000);
  }
}


function toggleComplete(button) {
  const taskItem = button.parentElement.parentElement;
  taskItem.classList.toggle("completed");

  // Only show confetti when marking as completed (not undoing)
  if (taskItem.classList.contains("completed")) {
    showEmojiConfetti("🎉");
  }
}

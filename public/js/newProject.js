btn = document.querySelectorAll(".btn-group .btn");
console.log(btn);
submitBtn = document.getElementById("submit-btn");

const newProject = async (event) => {
  event.preventDefault();
  const name = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const due = document.getElementById("due-date").value;
  const icon = document.querySelector(".active input").id;

  const response = await fetch("/api/projects/", {
    method: "POST",
    body: JSON.stringify({ name, description, due, icon }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert(response.statusText);
  }
};

const iconSelect = (event) => {
  const active = event.currentTarget;
  console.log(active);
  active.classList.add("active");
};

btn.forEach((input) => {
  input.addEventListener("click", iconSelect);
});

submitBtn.addEventListener("click", newProject);

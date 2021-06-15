const newFormHandler = async (event) => {
  console.log("here");
  event.preventDefault();
  const project_id = document.querySelector("#project_id").value.trim();
  const title = document.querySelector("#title").value.trim();
  console.log("title = " + title);

  if (project_id && title) {
    const response = await fetch(`/api/tasks`, {
      method: "POST",
      body: JSON.stringify({ project_id, title }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/project/" + project_id);
    } else {
      alert("Failed to post new task");
    }
  }
};

document.querySelector(".new-task").addEventListener("submit", newFormHandler);

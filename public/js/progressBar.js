const checkBox = document.querySelectorAll("input");
const currentProgress = document.querySelector(".progress-bar").AriaValueNow;

const changeDisplay = (event) => {
  let checked = event.target;
  console.log(checked);

  let checkedBoxes = 0;

  checkBox.forEach((checkedbox) => {
    if (checkedbox.checked === true) {
      checkedBoxes++;
    }
  });

  if (checkedBoxes !== 0) {
    const percentage = (checkedBoxes / checkBox.length) * 100;
    const progressBar = document.querySelector(".progress-bar");
    progressBar.AriaValueNow = percentage;
    progressBar.style.width = `${percentage}%`;
    updateTask(checked);
  } else {
    const progressBar = document.querySelector(".progress-bar");
    progressBar.AriaValueNow = 0;
    progressBar.style.width = `0%`;
  }
  updateTask(checked);
};

const updateTask = async (checked) => {
  const task_id = checked.id;
  if (checked.checked) {
    const completed = "true";
    const response = await fetch(`/api/projects/task/${task_id}`, {
      method: "PUT",
      body: JSON.stringify({ completed }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("SUCCESS");
    } else {
      alert(response.statusText);
    }
  } else {
    const completed = "false";
    const response = await fetch(`/api/projects/task/${task_id}`, {
      method: "PUT",
      body: JSON.stringify({ completed }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("SUCCESS");
    } else {
      alert(response.statusText);
    }
  }
};

const init = () => {
  let checkedBoxes = 0;

  checkBox.forEach((checkedbox) => {
    if (checkedbox.checked === true) {
      checkedBoxes++;
    }
  });
  if (checkedBoxes !== 0) {
    const percentage = (checkedBoxes / checkBox.length) * 100;
    const progressBar = document.querySelector(".progress-bar");
    progressBar.AriaValueNow = percentage;
    progressBar.style.width = `${percentage}%`;
  } else {
    const progressBar = document.querySelector(".progress-bar");
    progressBar.AriaValueNow = 0;
    progressBar.style.width = `0%`;
  }
};

init();

checkBox.forEach((checkbox) => {
  checkbox.addEventListener("change", changeDisplay);
});

const checkBox = document.querySelectorAll("input");
const currentProgress = document.querySelector(".progress-bar").AriaValueNow;

const changeDisplay = (event) => {
  let checked = event.target;
  // checked.setAttribute("checked");

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
  }
};

checkBox.forEach((checkbox) => {
  checkbox.addEventListener("change", changeDisplay);
});

//add fetch call to update task boolean iscompleted to true

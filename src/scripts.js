const password = "TrustNo1";
const enterPasswordBtn = document.querySelector(".ok-btn");
const passwordField = document.querySelector(".password-field");
const inputsRange = document.querySelectorAll("input[type=range]");
const inputsCheckbox = document.querySelectorAll("input[type=checkbox]");
const launchBtn = document.querySelector(".launch-btn");
const rocket = document.querySelector(".rocket");

const items = new Map();
const changedRocketValues = (itemKey, changeStatus) => {
  items.set(itemKey, changeStatus);

  if (items.size === 11) {
    let activeChecked = 0;
    let maxRanges = 0;
    for (let item of items.values()) {
      if (item === true) {
        activeChecked++;
      }
      if (item === '100') {
        maxRanges++;
      }
    }
    if (activeChecked === 6 && maxRanges === 5) {
      launchBtn.disabled = false;
    } else {
      launchBtn.disabled = true;
    }
  }
}

enterPasswordBtn.onclick = () => {
  if (passwordField.value === password) {
    enterPasswordBtn.disabled = true;
    passwordField.disabled = true;

    for (let x in inputsRange) {
      inputsRange[x].disabled = false;
    }
    for (let y in inputsCheckbox) {
      inputsCheckbox[y].disabled = false;
    }
  }
}

launchBtn.onclick = () => {
  rocket.classList.add("rocket__engage")
}



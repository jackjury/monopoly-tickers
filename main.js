const ticker = document.getElementById("ticker");
const fullScreen = document.getElementById("fullScreen");
const screen = document.getElementById("screen");

const scrollOn = document.getElementById("scroll-on");
const scrollOff = document.getElementById("scroll-off");

const msgOn = document.getElementById("msg-on");
const msgOff = document.getElementById("msg-off");

const messageInput = document.getElementById("messageInput");

const screenSelect = document.getElementById("screen-select");

const updateBtn = document.getElementById("btn-update");

let teams = [
  {
    name: document.getElementById("t1-name").value,
    value: document.getElementById("t1-value").value,
  },
  {
    name: document.getElementById("t2-name").value,
    value: document.getElementById("t2-value").value,
  },
  {
    name: document.getElementById("t3-name").value,
    value: document.getElementById("t3-value").value,
  },
  {
    name: document.getElementById("t4-name").value,
    value: document.getElementById("t4-value").value,
  },
];

scrollOn.addEventListener("change", () => {
  if (scrollOn.checked) {
    ticker.classList.add("scroll");
  }
});

scrollOff.addEventListener("change", () => {
  if (scrollOff.checked) {
    ticker.classList.remove("scroll");
  }
});

screenSelect.addEventListener("change", () => {
  console.log(screenSelect.value);
  if (screenSelect.value == 1) {
    screen.classList = "screen_circp4";
  } else if (screenSelect.value == 2) {
    screen.classList = "screen_circp6";
  }
});

function displayData(teamObj) {
  let div = document.createElement("div");
  div.classList.add("team");
  let divInner = `
  <span class="teamName">${teamObj.name}</span>
  <span class="value">$${teamObj.value}</span>
`;
  div.innerHTML = divInner;
  ticker.appendChild(div);
}

updateBtn.addEventListener("click", () => {
  ticker.innerHTML = "";
  teams = [
    {
      name: document.getElementById("t1-name").value,
      value: document.getElementById("t1-value").value,
    },
    {
      name: document.getElementById("t2-name").value,
      value: document.getElementById("t2-value").value,
    },
    {
      name: document.getElementById("t3-name").value,
      value: document.getElementById("t3-value").value,
    },
    {
      name: document.getElementById("t4-name").value,
      value: document.getElementById("t4-value").value,
    },
  ];
  teams.forEach((team) => {
    displayData(team);
  });
});

msgOn.addEventListener("change", () => {
  if (msgOn.checked) {
    fullScreen.innerHTML = messageInput.value;
    fullScreen.classList.remove("hidden");
  }
});

msgOff.addEventListener("change", () => {
  if (msgOff.checked) {
    fullScreen.classList.add("hidden");
  }
});

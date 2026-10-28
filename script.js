// All page data lives here. Edit these lists to update the report.

const STATUS = [
  { part: "Robot body and part layout design", by: "Shaik Mohammed Afraz Hussain", done: true },
  { part: "Report UI (this page)", by: "Shaik Mohammed Afraz Hussain", done: true },
  { part: "Waste collection mechanism", by: "Teammates", done: true },
  { part: "Navigation and obstacle sensing", by: "Teammates", done: true },
  { part: "Field testing in water", by: "Team", done: false },
];

const TEAM = [
  { name: "Shaik Mohammed Afraz Hussain", role: "UI/UX, robot design and report UI" },
  { name: "Four teammates", role: "Built the rest of the system: collection, control and navigation" },
];

function renderStatus() {
  const body = document.getElementById("status-body");
  STATUS.forEach((item) => {
    const row = document.createElement("tr");
    const part = document.createElement("td");
    const by = document.createElement("td");
    const state = document.createElement("td");
    const tag = document.createElement("span");
    part.textContent = item.part;
    by.textContent = item.by;
    tag.textContent = item.done ? "Complete" : "Pending";
    tag.className = "tag " + (item.done ? "done" : "pending");
    state.appendChild(tag);
    row.append(part, by, state);
    body.appendChild(row);
  });
}

function renderTeam() {
  const list = document.getElementById("team-list");
  TEAM.forEach((member) => {
    const li = document.createElement("li");
    const name = document.createElement("strong");
    name.textContent = member.name;
    li.append(name, document.createTextNode(member.role));
    list.appendChild(li);
  });
}

function setupDesignImage() {
  const img = document.getElementById("design-img");
  const empty = document.getElementById("design-empty");
  const showEmpty = () => {
    img.hidden = true;
    empty.hidden = false;
  };
  img.addEventListener("error", showEmpty);
  if (img.complete && img.naturalWidth === 0) showEmpty();
}

document.getElementById("print-btn").addEventListener("click", () => window.print());
renderStatus();
renderTeam();
setupDesignImage();

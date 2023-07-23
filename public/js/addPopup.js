
function openAddPopup(id) {
  console.log(id);
  console.log(document.querySelector(`section#${id}`));
  document.querySelector(`section#${id}`).classList.add("open");
}

function closeAddPopup(id) {
  document.getElementById(`${id}`).classList.remove("open");
}
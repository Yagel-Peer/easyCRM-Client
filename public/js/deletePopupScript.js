const deletePopup = document.querySelector("section.delete-popup");

function openDeletePopup() {
  deletePopup.classList.add("open");
}

function closeDeletePopup() {
  deletePopup.classList.remove("open");
}
const navToggle = document.querySelector(".nav-toggle");
const closebtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector(".sidebar");
const year = document.getElementById("year");

// Open / Close Sidebar and remove overlay
const openSidebar = () => {
  overlay.classList.add("show");
  sidebar.classList.add("show");
};
const closeSidebar = () => {
  overlay.classList.remove("show");
  sidebar.classList.remove("show");
};

navToggle.addEventListener("click", openSidebar);
closebtn.addEventListener("click", closeSidebar);

function currentYear() {
  return new Date().getFullYear();
}
year.innerHTML = currentYear();

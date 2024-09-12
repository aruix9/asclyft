// active nav link
const currentPath = window.location.pathname.split("/");
const currentPage = currentPath[currentPath.length - 1];
if (currentPath.includes(currentPage)) {
  let navLink = document.querySelector(".nav-link[href='" + currentPage + "']");
  navLink
    ? navLink.classList.add("active")
    : document
        .querySelector("." + currentPage.split(".")[0])
        .classList.add("active");
} else {
  document.querySelector(".nav-link[href='index.php']").classList.add("active");
}

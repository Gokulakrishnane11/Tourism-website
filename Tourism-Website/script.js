const initApp = () => {
  const menuBtn = document.querySelector(".hamburger");
  const sideBar = document.querySelector(".sidenav");
  const inputBox = menuBtn.querySelector("input");

  // console.log("App initialized"); // Debugging line

  inputBox.addEventListener("click", () => {
    console.log("Hamburger clicked"); // Debugging line
    sideBar.classList.toggle("open");
  });

  const icon = document.querySelector(".my-icon");
};

document.addEventListener("DOMContentLoaded", initApp);

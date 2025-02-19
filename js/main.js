const themeChangeButton = document.getElementById("theme-change");

/*  if dark mode was previously on*/
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeChangeButton.textContent = "light mode";
}

/*event listener for button click*/
themeChangeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  /* Update button text based on the theme*/
  if (document.body.classList.contains("dark-mode")) {
    themeChangeButton.textContent = "light mode";
    localStorage.setItem("darkMode", "enabled");
  } else {
    themeChangeButton.textContent = "night mode";
    localStorage.setItem("darkMode", "disabled");
  }
});

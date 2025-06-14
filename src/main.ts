import "./style.css";

function global() {
  return {
    isMobileMenuOpen: false,
    isDarkMode: false,
    themeInit: function() {
      if (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        this.isDarkMode = true;
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        this.isDarkMode = false;
      }
    },
    themeSwitch: function() {
      if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        this.isDarkMode = false;
      } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        this.isDarkMode = true;
      }
    },
  };
}



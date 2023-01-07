import { reactive } from "vue";

export const themeStore = reactive({
  theme: "light",
  getTheme() {
    return localStorage.getItem("theme") || "light"
  },
  setTheme(theme) {
    localStorage.setItem("theme", theme);
    this.theme = theme;
    document.documentElement.className = `${theme}-theme`;
  },
  toggleTheme() {
    if (this.theme === "light") {
      this.setTheme("dark");
    } else {
      this.setTheme("light");
    }
  },
});

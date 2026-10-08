const themeToggle = document.querySelector("#theme-toggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function setSummaryTheme(theme, persist = false) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-checked", String(isDark));
  themeToggle.setAttribute("aria-label", `${isDark ? "Matikan" : "Aktifkan"} mode gelap`);
  themeToggle.title = `${isDark ? "Matikan" : "Aktifkan"} mode gelap`;
  themeColorMeta.content = isDark ? "#171c17" : "#f4f5ef";

  if (persist) {
    try {
      localStorage.setItem("ruang-ujian-theme", isDark ? "dark" : "light");
    } catch {}
  }
}

setSummaryTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
themeToggle.addEventListener("click", () => {
  setSummaryTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark", true);
});

document.querySelector("#print-summary").addEventListener("click", () => window.print());
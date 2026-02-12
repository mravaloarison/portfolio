const html = document.documentElement;
const toggles = document.querySelectorAll(".theme-toggle");

if (!localStorage.getItem("theme")) {
	localStorage.setItem("theme", "dark");
}

function applyTheme(theme) {
	html.setAttribute("data-bs-theme", theme);
	localStorage.setItem("theme", theme);
}

applyTheme(localStorage.getItem("theme"));

toggles.forEach((toggle) => {
	toggle.addEventListener("click", () => {
		const current = html.getAttribute("data-bs-theme");
		const next = current === "dark" ? "light" : "dark";
		applyTheme(next);
	});
});

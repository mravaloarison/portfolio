(() => {
	const toggleBtn = document.getElementById("theme-toggle");
	const icon = toggleBtn.querySelector("i");

	const getTheme = () =>
		localStorage.getItem("theme") ||
		(window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light");

	const setTheme = (theme) => {
		document.documentElement.setAttribute("data-bs-theme", theme);
		localStorage.setItem("theme", theme);
		icon.className =
			theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";
	};

	let currentTheme = getTheme();
	setTheme(currentTheme);

	toggleBtn.addEventListener("click", () => {
		currentTheme = currentTheme === "dark" ? "light" : "dark";
		setTheme(currentTheme);
	});
})();

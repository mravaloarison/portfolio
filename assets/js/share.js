function copyLink(button) {
	navigator.clipboard.writeText(window.location.href).then(function () {
		const icon = button.querySelector("i");
		const text = button.querySelector("span");

		const originalIcon = icon.className;
		const originalText = text.textContent;

		icon.className = "bi bi-check-lg";
		text.textContent = "Copied";

		setTimeout(function () {
			icon.className = originalIcon;
			text.textContent = originalText;
			button.style.borderColor = "";
			button.style.color = "";
		}, 1000);
	});
}

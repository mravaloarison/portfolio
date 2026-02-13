$(document).ready(function () {
	if (!$(".project-item").length) return;

	const PROJECTS_PER_PAGE = 5;
	let currentProjectPage = 1;
	let currentCategory = null;

	function getFilteredProjects() {
		if (!currentCategory) return $(".project-item");

		return $(".project-item").filter(function () {
			return $(this).data("category") === currentCategory;
		});
	}

	function renderProjectPagination(total) {
		let totalPages = Math.ceil(total / PROJECTS_PER_PAGE);
		let container = $("#projects-pagination");
		container.empty();

		if (totalPages <= 1) return;

		if (currentProjectPage > 1) {
			container.append(
				`<li><a href="#" class="page-link prev">&laquo;</a></li>`
			);
		}

		for (let i = 1; i <= totalPages; i++) {
			container.append(`
        <li>
          <a href="#" class="page-link page-number ${
				i === currentProjectPage ? "fw-medium" : ""
			}" data-page="${i}">
            ${i}
          </a>
        </li>
      `);
		}

		if (currentProjectPage < totalPages) {
			container.append(
				`<li><a href="#" class="page-link next">&raquo;</a></li>`
			);
		}
	}

	function renderProjects() {
		$(".project-item").hide();

		let items = getFilteredProjects();
		let total = items.length;

		let start = (currentProjectPage - 1) * PROJECTS_PER_PAGE;
		let end = start + PROJECTS_PER_PAGE;

		items.slice(start, end).show();
		renderProjectPagination(total);
	}

	function activateCategory(elem) {
		$(".project-filter").removeClass("fw-medium").css({
			borderColor: "",
			backgroundColor: "",
			color: "",
		});

		$(elem).addClass("fw-medium").css({
			borderColor: "var(--bs-secondary)",
			backgroundColor: "rgba(var(--bs-secondary-rgb), 0.08)",
			color: "var(--bs-secondary)",
		});

		currentCategory = $(elem).data("category") || null;
		currentProjectPage = 1;

		renderProjects();
	}

	// Attach click handler
	$(document).on("click", ".project-filter", function (e) {
		e.preventDefault();
		activateCategory(this);
	});

	// Pagination clicks
	$(document).on("click", "#projects-pagination .page-number", function (e) {
		e.preventDefault();
		currentProjectPage = parseInt($(this).data("page"));
		renderProjects();
	});

	$(document).on("click", "#projects-pagination .prev", function (e) {
		e.preventDefault();
		currentProjectPage--;
		renderProjects();
	});

	$(document).on("click", "#projects-pagination .next", function (e) {
		e.preventDefault();
		currentProjectPage++;
		renderProjects();
	});

	renderProjects();
	activateCategory($(".project-filter[data-category='']").first());
});

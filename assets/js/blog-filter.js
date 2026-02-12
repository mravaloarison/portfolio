const POSTS_PER_PAGE = 5;
let currentPage = 1;
let currentTag = null;

function getFilteredPosts() {
	if (!currentTag) return $(".blog-post");

	return $(".blog-post").filter(function () {
		let tags = $(this).data("tags").toString().split(",");
		return tags.includes(currentTag);
	});
}

function renderPagination(totalPosts) {
	let totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
	let container = $("#blog-pagination");
	container.empty();

	if (totalPages <= 1) return;

	if (currentPage > 1) {
		container.append(
			`<li><a href="#" class="page-link prev">&laquo;</a></li>`
		);
	}

	for (let i = 1; i <= totalPages; i++) {
		container.append(`
      <li>
        <a href="#" class="page-link page-number ${
			i === currentPage ? "fw-medium" : ""
		}" data-page="${i}">
          ${i}
        </a>
      </li>
    `);
	}

	if (currentPage < totalPages) {
		container.append(
			`<li><a href="#" class="page-link next">&raquo;</a></li>`
		);
	}
}

function renderPosts() {
	$(".blog-post").hide();

	let posts = getFilteredPosts();
	let total = posts.length;

	let start = (currentPage - 1) * POSTS_PER_PAGE;
	let end = start + POSTS_PER_PAGE;

	posts.slice(start, end).show();
	renderPagination(total);
}

function activateTag(elem) {
	$(".tag-filter").removeClass("fw-medium").css({
		borderColor: "",
		backgroundColor: "",
		color: "",
	});

	$(elem).addClass("fw-medium").css({
		borderColor: "var(--bs-secondary)",
		backgroundColor: "rgba(var(--bs-secondary-rgb), 0.08)",
		color: "var(--bs-secondary)",
	});

	currentTag = $(elem).data("tag") || null;
	currentPage = 1;

	renderPosts();
}

function initBlog() {
	// Tag click
	$(".tag-filter").on("click", function (e) {
		e.preventDefault();
		activateTag(this);
	});

	// Pagination clicks
	$("#blog-pagination").on("click", ".page-number", function (e) {
		e.preventDefault();
		currentPage = parseInt($(this).data("page"));
		renderPosts();
	});

	$("#blog-pagination").on("click", ".prev", function (e) {
		e.preventDefault();
		currentPage--;
		renderPosts();
	});

	$("#blog-pagination").on("click", ".next", function (e) {
		e.preventDefault();
		currentPage++;
		renderPosts();
	});

	renderPosts();
	activateTag($(".tag-filter[data-tag='']").first());
}

$(document).ready(initBlog);

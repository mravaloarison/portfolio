function getCurrentPageIdx() {
	return $(".pagination-container div[page-idx]:visible").attr("page-idx");
}

function togglePage(page_idx) {
	$(".pagination-container div.page-content").each(function () {
		let idx = $(this).attr("page-idx");
		if (page_idx === idx) {
			$(this).show();
		} else {
			$(this).hide();
		}
	});
}

function showPage(page_idx) {
	let current_page_idx = getCurrentPageIdx();
	if (page_idx !== current_page_idx) {
		togglePage(page_idx);
	}
}

function showFirstPageIfNoneVisible() {
	if (!$(".pagination-container div[page-idx]:visible").length) {
		let first = $(".pagination-container div.page-content")
			.first()
			.attr("page-idx");
		togglePage(first);
	}
}

function pageChange(elem) {
	let page_idx = $(elem).parent().attr("page-idx");
	showPage(page_idx);
}

function addPageLinkHandlers() {
	let page_links = $("ul.pagination li.page-item a.page-link");
	page_links.on("click.pageChange", function (e) {
		e.preventDefault();
		pageChange(this);
	});
}

function localLinkHandler() {
	let hash_item = window.location.hash;
	if (hash_item) {
		var hash_page_idx = $(hash_item)
			.closest("div.page-content")
			.attr("page-idx");
		if (hash_page_idx) {
			showPage(hash_page_idx);
			$(hash_item).get(0).scrollIntoView();
		}
	}
}

$(document).ready(function () {
	addPageLinkHandlers();
	showFirstPageIfNoneVisible();
});

$(window).on("load", localLinkHandler);
$(window).on("hashchange", localLinkHandler);

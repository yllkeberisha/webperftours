function fadeInSearchResults() {
	var searchResults = document.getElementsByClassName("search-result-item");
	var windowHeight = window.innerHeight;
	var scrollPosition =
		window.pageYOffset || document.documentElement.scrollTop;

	for (var i = 0; i < searchResults.length; i++) {
		var element = searchResults[i];
		var elementPosition = element.offsetTop;

		if (scrollPosition + windowHeight > elementPosition) {
			var distanceFromBottom =
				scrollPosition + windowHeight - elementPosition;
			var opacity = Math.min(distanceFromBottom / 400, 1);
			var rightPosition = Math.max(0, 100 - distanceFromBottom / 2);

			element.style.opacity = opacity;
			element.style.right = rightPosition + "px";
		} else {
			element.style.opacity = 0;
			element.style.right = "300px";
		}
	}
}

var searchResults = document.getElementsByClassName("search-result-item");
for (var i = 0; i < searchResults.length; i++) {
	searchResults[i].style.opacity = 0;
	searchResults[i].style.position = "relative";
	searchResults[i].style.right = "300px";
	searchResults[i].style.transition = "opacity 0.5s, right 0.5s";
}

window.addEventListener("scroll", function () {
	fadeInSearchResults();
});

fadeInSearchResults();

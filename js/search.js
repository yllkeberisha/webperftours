document.addEventListener("DOMContentLoaded", () => {
	const setupSearch = formElement => {
		console.log("setup");
		const inputElement = formElement.querySelector(".search-input");
		const resultsContainer = document.createElement("div");
		resultsContainer.className = "search-results";
		formElement.appendChild(resultsContainer);

		const fetchResults = query => {
			const xhr = new XMLHttpRequest();
			xhr.open(
				"GET",
				`/api/destinations?q=${encodeURIComponent(query)}`,
				false
			);

			xhr.send();
			return JSON.parse(xhr.responseText);
		};

		const displayResults = results => {
			resultsContainer.innerHTML = "";
			if (results.length > 0) {
				const ul = document.createElement("ul");
				results.forEach(result => {
					const li = document.createElement("li");
					const a = document.createElement("a");
					a.href = result.link;
					a.textContent = result.name;
					li.appendChild(a);
					ul.appendChild(li);
				});
				resultsContainer.appendChild(ul);
			} else {
				resultsContainer.innerHTML = "<p>No results found</p>";
			}
		};

		const debouncedSearch = _.debounce(query => {
			if (query.length > 0) {
				const results = fetchResults(query);
				displayResults(results);
			} else {
				resultsContainer.innerHTML = "";
			}
		}, 50);

		inputElement.addEventListener("input", e => {
			const query = e.target.value.trim();
			debouncedSearch(query);
		});

		document.addEventListener("click", e => {
			if (!formElement.contains(e.target)) {
				resultsContainer.innerHTML = "";
			}
		});
	};

	document.querySelectorAll(".search-form").forEach(setupSearch);
});

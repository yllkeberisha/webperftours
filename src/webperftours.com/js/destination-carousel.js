document.addEventListener("DOMContentLoaded", function () {
	const productSections = document.querySelectorAll(".products");

	productSections.forEach(section => {
		const productList = section.querySelector("ul");
		const products = productList.querySelectorAll("li");
		let currentIndex = 0;

		const prevArrow = document.createElement("button");
		prevArrow.innerHTML = "&larr;";
		prevArrow.classList.add("carousel-arrow", "prev");
		const nextArrow = document.createElement("button");
		nextArrow.innerHTML = "&rarr;";
		nextArrow.classList.add("carousel-arrow", "next");

		section.insertBefore(prevArrow, productList);
		section.appendChild(nextArrow);

		function getVisibleItems() {
			const windowWidth = window.innerWidth;
			if (windowWidth >= 992) return 4;
			if (windowWidth >= 768) return 3;
			if (windowWidth >= 576) return 2;
			return 1;
		}

		function updateCarousel() {
			const visibleItems = getVisibleItems();
			const totalItems = products.length;
			const maxIndex = Math.max(0, totalItems - visibleItems);

			currentIndex = Math.min(currentIndex, maxIndex);

			const offset = -(currentIndex * (100 / visibleItems));
			productList.style.transform = `translateX(${offset}%)`;

			prevArrow.style.display = currentIndex === 0 ? "none" : "block";
			nextArrow.style.display =
				currentIndex >= maxIndex ? "none" : "block";
		}

		prevArrow.addEventListener("click", () => {
			if (currentIndex > 0) {
				currentIndex--;
				updateCarousel();
			}
		});

		nextArrow.addEventListener("click", () => {
			const visibleItems = getVisibleItems();
			const maxIndex = Math.max(0, products.length - visibleItems);
			if (currentIndex < maxIndex) {
				currentIndex++;
				updateCarousel();
			}
		});

		window.addEventListener("resize", () => {
			updateCarousel();
		});

		updateCarousel();
	});
});

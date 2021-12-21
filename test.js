const imgg = document.querySelectorAll(".text");

imgg.forEach((itemm) => {
	itemm.addEventListener("mouseenter", () => {
		itemm.style.opacity = "0.8";
		itemm.style.color = "orange";
		itemm.style.fontWeight = "bold";
	});

	itemm.addEventListener("mouseleave", () => {
		itemm.style.opacity = "0";
		itemm.style.transition = "2s";
	});
});

//1. for문 기본문법
// for (let i = 0; i < imgg.length; i++) {
// 	const itemm = imgg.item(i);

// 	itemm.addEventListener("mouseenter", () => {
// 		itemm.style.opacity = "0.8";
// 		itemm.style.color = "orange";
// 		itemm.style.fontWeight = "bold";
// 	});

// 	itemm.addEventListener("mouseleave", () => {
// 		itemm.style.opacity = "0";
// 		itemm.style.transition = "2s";
// 	});
// }

//2. forEach 사용
// imgg.forEach(function (itemm) {
// 	itemm.addEventListener("mouseenter", () => {
// 		itemm.style.opacity = "0.8";
// 		itemm.style.color = "orange";
// 		itemm.style.fontWeight = "bold";
// 	});

// 	itemm.addEventListener("mouseleave", () => {
// 		itemm.style.opacity = "0";
// 		itemm.style.transition = "2s";
// 	});
// });

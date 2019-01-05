'use strict';

function getElements(selector, target = document) {
	const elements = target.querySelectorAll(selector);
	return Array.from(elements);
}

const menu = getElements('.nav')[0];
const menuItemsArray = getElements('li', menu);

menuItemsArray.forEach(menuitem => {
	menuitem.addEventListener('click', clickOnMenu);
});

function clickOnMenu(event) {
	console.log(event.currentTarget.innerText);
}

const feature_buttons = getElements('.feature_button');

feature_buttons.forEach(button => {
	button.addEventListener('click', tabClick);
});

function tabClick(event) {
	const tabIndex = event.currentTarget.dataset.index;
	
	getElements('.feature_button.active')[0].classList.remove('active');
	getElements('.tab-content.active')[0].classList.remove('active');
	
	getElements('.tab-content.tab-' + tabIndex)[0].classList.add('active');
	event.currentTarget.classList.add('active');
}

$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
			items: 1,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 7000,
			autoplayHoverPause: true,
			smartSpeed: 3000,
		},
	);

	let imgPreview = getElements(".image-preview"); // знаходим елемент з класом .image-preview
	if(imgPreview.length !== 0) {
		imgPreview = imgPreview[0];

		imgPreview.addEventListener("click", function() { // додаєм подію на клік по .image-preview
			imgPreview.classList.remove("active"); // видаляэм клас active до .image-preview
			imgPreview.innerHTML = ""; // видаляєм все що є всередині .image-preview
		})
	}
	const workImages = getElements(".work_img"); // знаходим всі елементи з класом .work_img
	
	workImages.forEach(function(work_img, index) { // перебираєм список елементів .work_img
		console.log(work_img, index);
		work_img.addEventListener("click", function() { // додає подію на клік по кожній .work_img
			const imageElement = getElements("img", work_img)[0]; // шукаєм картинку всередині work_img
			
			const newImage = document.createElement("img"); // створюэмо нову картинку
			
			newImage.src = imageElement.src; // присвоюємо новій картинці src
			newImage.classList.add("new-image"); // додаєм клас new-image до створеної картинки
			
			imgPreview.appendChild(newImage); // вставляємо нову картинку всередину .image-preview
			imgPreview.classList.add("active"); // додаємо клас active до .image-preview
		});
	});
	
	const showMoreBtn = document.getElementById("show-more-btn");
	if(showMoreBtn) {
	    showMoreBtn.addEventListener("mouseup", function () {

        })

	const imageHidden = document.getElementById("image_hidden");
	    imageHidden.forEach(function(image_hidden, home) {
	    	console.log(image_hidden, home);
			}
		)

	}
});


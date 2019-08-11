(function(){
	"use strict";

	console.log("fired");

  const lightBox = document.querySelector('.lightbox'),
				videoImg = document.querySelector('.explainer'),
				closeButton = document.querySelector('.close-lightbox'),
				// images = document.querySelectorAll('#galleryImg img'),
				houseVideo = document.querySelector('.video');

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");

  function popLightBox() {
		lightBox.classList.add('show-lightbox');

		houseVideo.play();
  }

	// function popImage() {
	// 	images.forEach(image => image.classList.add("show-lightboxI"));
	// }

  function closeLightBox(event) {
		event.preventDefault();
		// make the lightbox close
		houseVideo.currentTime = 0; // rewind the video
		houseVideo.pause();
    //event.preventDefault();
    // make the lightbox close
    lightBox.classList.remove('show-lightbox');
  }

	// function closeImage() {
	// 	event.preventDefault();
	//
	// 	images.forEach(image => image.classList.remove("show-lightboxI"));
	// }

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}


	button.addEventListener("click", hamburgerMenu, false);
	videoImg.addEventListener("click", popLightBox);
	closeButton.addEventListener("click", closeLightBox);



	var img1 = document.getElementById("small-fish");
	var img2 = document.getElementById("small-river");
	var img3 = document.getElementById("small-trout");
	var img4 = document.getElementById("small-bin");
	var img5 = document.getElementById("small-net");
	var img6 = document.getElementById("small-picking");

	var big1 = document.getElementById("fish");
	var big2 = document.getElementById("river");
	var big3 = document.getElementById("trout");
	var big4 = document.getElementById("bin");
	var big5 = document.getElementById("net");
	var big6 = document.getElementById("picking");

	var span1 = document.getElementById("close1");
	var span2 = document.getElementById("close2");
	var span3 = document.getElementById("close3");
	var span4 = document.getElementById("close4");
	var span5 = document.getElementById("close5");
	var span6= document.getElementById("close6");

	span1.onclick = function() {
		big1.style.display = "none";
	}

	span2.onclick = function() {
		big2.style.display = "none";
	}

	span3.onclick = function() {
		big3.style.display = "none";
	}

	span4.onclick = function() {
		big4.style.display = "none";
	}

	span5.onclick = function() {
		big5.style.display = "none";
	}

	span6.onclick = function() {
		big6.style.display = "none";
	}

	img1.onclick = function() {
		big1.style.display = "block";
	}

	img2.onclick = function() {
		big2.style.display = "block";
	}

	img3.onclick = function() {
		big3.style.display = "block";
	}

	img4.onclick = function() {
		big4.style.display = "block";
	}

	img5.onclick = function() {
		big5.style.display = "block";
	}

	img6.onclick = function() {
		big6.style.display = "block";
	}


	// images.forEach(image => image.addEventListener("click", popImage));
	// images.forEach(image => image.addEventListener("click", closeImage));

})();

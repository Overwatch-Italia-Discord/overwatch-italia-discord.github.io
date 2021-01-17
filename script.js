if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 document.getElementById("css").href = "assets/mobile.css"
}

window.onscroll = function() {scrollBar()};

var navbar = document.getElementById("navBar");

var sticky = navbar.offsetTop;

function scrollBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var baritems = document.getElementsByClassName("bar-item");
function bar() {
	for (i=0; i < baritems.length; i++) {
		if (baritems[i].style.display === "none") {
			baritems[i].style.display = "unset";
		} else {
			baritems[i].style.display = "none";
		}
	}
}

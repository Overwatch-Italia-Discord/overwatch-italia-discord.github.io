// document.body.style.minWidth = (screen.width - 50).toString() + "px";

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 document.getElementById("css").href = "assets/mobile.css"
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

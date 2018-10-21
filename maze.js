/*window.onload = function(){
	onmouseover = document.getElementById('boundary1').style.backgroundColor = 'red';
}
*/
window.onload = function(){
	var topLeft = document.getElementById("boundary1");

	topLeft.onmouseover = function(){
			if (topLeft.style.backgroundColor == 'white'){
				topLeft.style.backgroundColor = 'red';
			}
			else {
				topLeft.style.backgroundColor = 'red';
		}

	}
}

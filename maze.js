/*window.onload = function(){
	onmouseover = document.getElementById('boundary1').style.backgroundColor = 'red';
}
*/
window.onload = function(){
	/*var topLeft = document.getElementById("boundary1");

	topLeft.onmouseover = function(){
			if (topLeft.style.backgroundColor == 'white'){
				topLeft.style.backgroundColor = 'red';
			}
			else {
				topLeft.style.backgroundColor = 'red';
		}

	}*/
	var m = document.getElementById("maze");
	var color = false;
	var x = document.querySelectorAll(".boundary");
	var end = document.getElementById('end');
	let s = document.getElementById("start");
	var stat = document.getElementById("status")
	var i = 0;
	for(  i = 0; i < x.length; i++){
		
			x[i].addEventListener('mouseover', function(){
				for ( var j = 0; j<x.length; j++){
				x[j].classList.add("youlose")
				
				color = true;
				
				}
				
				
				})
				
				
				
			
				
					}
	
		s.onclick = function(){
			for(var h =0; h<x.length; h++){
			x[h].classList.remove("youlose");
			
		}
		
	}//end of for loop
	
	
	end.onmouseover = function(){
			if(color == false){
				stat.innerHTML = "You Win"
			}
			else{
				stat.innerHTML = "You Lose"
			}
	
		}
	maze.onmouseleave = function(){
		
	stat.innerHTML = "You Lose"}
			
			}
			
			
		

	

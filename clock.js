function myClock(){
	var time= new Date();
	var hours= time.getHours();
	var minutes= time.getMinutes();
	var seconds= time.getSeconds();

	// if(h <= 9) h = '0'+h;
	// if(m <= 9) m = '0'+m;
	// if(s <= 9) s = '0'+s;

	// 	color = "#"+h+m+s;
	

	var hour= document.getElementById('hours');
	hour.innerHTML = hours

	var minute = document.getElementById('minutes');
	minute.innerHTML= minutes

	var second= document.getElementById('seconds');
	second.innerHTML=seconds

	if(hours <= 9) hour.innerHTML = '0'+hours;
	if(minutes <= 9) minute.innerHTML = '0'+minutes;
	if(seconds <= 9) second.innerHTML = '0'+seconds;

		color = "#"+hour+minute+second;
	

}


 
 setInterval(myClock, 1000);
myClock();


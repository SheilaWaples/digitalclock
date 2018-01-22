function myClock(){
	var time= new Date();
	var hours= time.getHours();
	var minutes= time.getMinutes();
	var seconds= time.getSeconds();

	var hour= document.getElementById('hours');
	hour.innerHTML = hours

	var minute = document.getElementById('minutes');
	minute.innerHTML= minutes

	var second= document.getElementById('seconds');
	second.innerHTML=seconds



if (hours<10){
	'0' + hours
}

if (minutes<10){
	'0' + minutes
}

if (seconds<10){
	('0' + '10')
}


document.body.style.backgroundColor="#"+ hours + minutes + seconds

}
setInterval(myClock, 1000)
myClock()


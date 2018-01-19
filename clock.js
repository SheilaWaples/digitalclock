function myClock(){
	var time= new Date();
	var hours= time.getHours();
	var minutes= time.getMinutes();
	var seconds= time.getSeonds();



if (hours<10){
	'0' + hours
}

if (minutes<10){
	'0' + minutes
}

if (seconds<10){
	'0' + seconds
}

if (hours.length <2){

	hours='0' + hours;
}

}

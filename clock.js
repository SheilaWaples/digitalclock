function clock(){
	var time=new Date();
	var hours= time.getHours();
	var minutes= time.getMinutes();
	var seconds= time.getSeconds();
	minutes= checkTime(0);
	seconds= checkTime();

}
 if (hours <10){
	hours="0" + hours;

}

if (minutes <10){
	minutes="0" + minutes;
}

if (seconds <10){

	seconds= "0" + seconds;
}
var currentTime= hour + '.' + minutes + '.' + seconds;
var clock= document.getElementById('clock');
// SetInterval('clock', 1000);
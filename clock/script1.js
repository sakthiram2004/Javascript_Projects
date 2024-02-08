function change()
{
	let datetime =new Date();
	let hr=datetime.getHours();
	let mi=zero(datetime.getMinutes());
	let sec=zero(datetime.getSeconds());
	if (hr>=12)
	{
		document.getElementById("ampm").innerHTML="PM";
	}
	document.getElementById("hr").innerHTML=hr;
	document.getElementById("min").innerHTML=mi;
	document.getElementById("sec").innerHTML=sec;
}

function zero(num)
{
	return num<10?"0"+num:num
}

setInterval(change,500);
var d = moment().format('hh:mm A on D MMM YYYY');
document.getElementById("date").innerHTML = d;

var z = prompt("Password?")
if (z != "2168"){
	prompt("Password")
}

var y = prompt("Place?").toLowerCase()
if (y == "cc") {
	document.getElementById("bg").src = "./images/cc.jpg"
}
else if (y == "gc") {
	document.getElementById("bg").src = "./images/gc.jpg"
}
else if (y == "fs") {
	document.getElementById("bg").src = "./images/fs.jpg"
}
else if (y == "rkb") {
	document.getElementById("bg").src = "./images/rkb.jpg"
}
else if (y == "cb") {
	document.getElementById("bg").src = "./images/cb.jpg";
}
else if (y == "ut") {
	document.getElementById("bg").src = "./images/ut.jpg";
	document.getElementById("amount2").style.top = "-985px"
}
else if (y == "am") {
	document.getElementById("bg").src = "./images/am.jpg";
	document.getElementById("amount2").style.top = "-985px"
}
else if (y == "fsc") {
	document.getElementById("bg").src = "./images/fsc.jpg";
	document.getElementById("amount2").style.top = "-965px"
}

else if (y == "ch") {
	document.getElementById("bg").src = "./images/ch.jpg";
}
else if (y == "rs") {
	document.getElementById("bg").src = "./images/rs.jpg";
	document.getElementById("amount2").style.top = "-965px"
}

else if (y == "vk") {
	document.getElementById("bg").src = "./images/vk.jpg";
	document.getElementById("amount2").style.top = "-965px"
}

else if (y == "st1") {
	document.getElementById("bg").src = "./images/st1.jpg";
	document.getElementById("amount2").style.top = "-955px"
}

else if (y == "vk1") {
	document.getElementById("bg").src = "./images/vk1.jpg";
}

var x = prompt("amount?")



document.getElementById("amount1").innerHTML = "₹"+x;
document.getElementById("amount2").innerHTML = "₹"+x;
    

    
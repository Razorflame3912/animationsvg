var svg = document.getElementById("svg");
var growbutton = document.getElementById("grow");
var bouncebutton = document.getElementById("bounce");
var stopbutton = document.getElementById("stop");
var timer;

var which = 0;


var clear = function(e){
    svg.innerHTML = "";
    if(this == growbutton){
	which = 0;
    }
    else{
	which = 1;
    }
};

var animate = function(e){
    var r = 0;
    var y = 250;
    var w = 70;
    var h = 30;
    var x = 250;
    var dir = -1;
    var dx = 3;
    var dy = 2;
    var func;
    var dvd;
    var dot = document.createElementNS("http://www.w3.org/2000/svg","circle");

    var grownshrink = function(){
	y = 250;
	x = 250;

	if(svg.innerHTML == ""){
	    dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
	    svg.appendChild(dot);
	}

	else{
	    dot = document.getElementById("dot");
	}
	dot.setAttribute("r",r);
	dot.setAttribute("cx",x);
	dot.setAttribute("cy",y);
	dot.setAttribute("id","dot");
	dot.setAttribute("fill","#FF0000");
	dot.setAttribute("stroke","#000000");
	
	if(r <= 0){
	    dir = 1;
	}
	if(r >= 250){
	    dir = -1;
	}
	r+=dir
    
    }

    var bounce = function(){
	x += dx;
	y += dy;

	if(svg.innerHTML == ""){
	    dvd = document.createElementNS("http://www.w3.org/2000/svg","rect");
	    svg.appendChild(dvd);
	}

	else{
	    dvd = document.getElementById("dvd");
	}

	dvd.setAttribute("width",w);
	dvd.setAttribute("height",h);
	dvd.setAttribute("x",x);
	dvd.setAttribute("id","dvd");
	dvd.setAttribute("y",y);
	dvd.setAttribute("fill","#FF0000");
	dvd.setAttribute("stroke","#000000");

	
	if(x + dx - r < 0 || x + dx + r > 500){
	    if(x + dx - r < 0){
		x = 0 + r;
	    }
	    else{
		x = 500 - r;
	    }
	    dx *= -1;
	}

	if(y + dy - r < 0 || y + dy + r > 500){
	    if(y + dy - r < 0){
		y = 0 + r;
	    }
	    else{
		y = 500 - r;
	    }
	    dy *= -1;
	}

    }

    if(which == 0){
	func = grownshrink;
    }
    else{
	func = bounce;
    }

    timer = setInterval(func,1000/60);
}

var stopit = function(){
    clearInterval(timer);
}






growbutton.addEventListener("click",clear);
bouncebutton.addEventListener("click",clear);
stopbutton.addEventListener("click",stopit);
svg.addEventListener("click",animate);

alert("hey");


var envoi = document.getElementById('envoi');
envoi.disabled = true;
var explic1 = document.getElementById("explication1");
var explic2 = document.getElementById("explication2");
var explic3 = document.getElementById("explication3");

explic1.style.display = "none";
explic2.style.display = "none";
explic3.style.display = "none";


function validationPW() {
  	var explic2 = document.getElementById("explication2");
	var f = document.getElementById("userpdw");
 	
	if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])^[a-zA-Z0-9]{8,15}$/.test(f.value) === true ) {
		f.style.backgroundColor = "green";
		explic2.style.display = "none";
		return true;
    	}
 	else {
    	f.style.backgroundColor = "red";
		explic2.style.display = "block";
		return false;
    	}
}

function validationMail() {
	var a = document.getElementById('useremail');
	var explic3 = document.getElementById("explication3");
	
	
	if( /^([A-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$)/.test(a.value) === true) {
		a.style.backgroundColor = "green";
		explic3.style.display = "none";
		return true;
    	}
 	else {
    	a.style.backgroundColor = "red";
		explic3.style.display = "block";
		return false;
    	}
}

function validationDate() {
	var explic1 = document.getElementById("explication1");
	var d = document.getElementById('birthdate');
	var t = d.value.split("/");
	
	if(t[0]==null || t[1]==null || t[2]==null || t[2]==""){
		d.style.backgroundColor = "red";
		explic1.style.display = "block";
		return false;
	}
	
	else if(t[0]<32 && t[0]>0 && t[1]>0 && t[1]<13 && t[2]<2019){
		explic1.style.display = "none";
		d.style.backgroundColor = "green";
		return true;
			
    }
 	else {
		explic1.style.display = "block";
		d.style.backgroundColor = "red";
		return false;
    }
}

function verif() {
	
	if( validationMail()   &&  validationPW()&&validationDate() ){
		
		document.getElementById('envoi').disabled =false;
	}
	else {
		document.getElementById('envoi').disabled =true;
	}
}

var pword = document.getElementById("userpdw");
var firstname = document.getElementById('firstname');
var date = document.getElementById('birthdate');
var mail = document.getElementById('useremail');
var name = document.getElementById('lastname');
var user = document.getElementById('username');



pword.addEventListener('input',verif);
date.addEventListener('input',verif );
mail.addEventListener('input',verif);



//03/06/1999
//aD574657465
//DaD85515fT
//1999-03-06




var envoi = document.getElementById('envoi');
envoi.disabled = true;
var explic1 = document.getElementById("birthdate");
var explic2 = document.getElementById("userpdw");
var explic3 = document.getElementById("useremail");


function validationPW() {
  	var explic2 = document.getElementById("userpdw");
	var f = document.getElementById("userpdw");

	if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])^[a-zA-Z0-9]{8,15}$/.test(f.value) === true ) {
		f.style.backgroundColor = "rgba(120,210,50,0.7)";
		return true;
    	}
 	else {
    f.style.backgroundColor = "rgba(230,60,60,0.7)";
		return false;
    }
}

function validationMail() {
	var a = document.getElementById('useremail');
	var explic3 = document.getElementById("useremail");


	if( /^([A-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$)/.test(a.value) === true) {
		a.style.backgroundColor = "rgba(120,210,50,0.7)";
		return true;
    	}
 	else {
    	a.style.backgroundColor = "rgba(230,60,60,0.7)";
		return false;
    	}
}

function validationDate() {
	var explic1 = document.getElementById("birthdate");
	var d = document.getElementById('birthdate');
	var t = d.value.split("/");

	if(t[0]==null || t[1]==null || t[2]==null || t[2]==""){
		d.style.backgroundColor = "rgba(230,60,60,0.4)";
		return false;
	}

	else if(t[0]<32 && t[0]>0 && t[1]>0 && t[1]<13 && t[2]<2019 && t[2]>2019-100){

		d.style.backgroundColor = "rgba(120,210,50,0.7)";
		return true;
    }
 	else {
		d.style.backgroundColor = "rgba(230,60,60,0.7)";
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

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//03/06/1999
//aD574657465
//DaD85515fT
//1999-03-06
























/**/

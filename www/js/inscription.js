alert("hey");
var pword = document.getElementById("userpdw");
var firstname = document.getElementById('firstname');
var date = document.getElementById('birthdate');
var mail = document.getElementById('useremail');
var name = document.getElementById('lastname');
var user = document.getElementById('username')

var envoi = document.getElementById('envoi');
envoi.disabled = true;





function validationPW() {
  	
	var f = document.getElementById("userpdw");
 	
	if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])^[a-zA-Z0-9]{8,15}$/.test(f.value) === true ) {
		
		return true;
    	}
 	else {
    	
		return false;
    	}
}

function validationMail() {
	var a = document.getElementById('useremail');
	
	if( /^([A-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$)/.test(a.value) === true) {
		
		return true;
    	}
 	else {
    	
		return false;
    	}
}

function validationDate() {
	var d = document.getElementById('birthdate');
	var t = d.value.split("/");
	
	
	if(t[0]<32){
		if(t[0]>0){
			if(t[1]>0){
				if (t[1]<13){
					if(t[2]<2019){
						return true;
					}
				}
			}
		}	
    }
 	else {
   
		return false;
    	}
}

function verif() {
	
	if( validationPW() && validationMail() &&  validationDate() ){
		
		document.getElementById('envoi').disabled =false;
	}
	else {
		document.getElementById('envoi').disabled =true;
	}
}
pword.addEventListener('input',verif);
date.addEventListener('input',verif );
mail.addEventListener('input',verif);



//03/06/1999
//aD574657465
//DaD85515fT
//1999-03-06



function loadData() {
	var name = document.getElementById("confirm_name")
	var lastname = document.getElementById("confirm_lastname");
	var email = document.getElementById("confirm_email");
	var phonenumber = document.getElementById("confirm_phonenumber");
	var age = document.getElementById("confirm_age");
	var occupation = document.getElementById("confirm_occupation")
	
	name.textContent = sessionStorage.firstname + " " + sessionStorage.lastname;
	email.textContent = sessionStorage.email; 
	phonenumber.textContent = sessionStorage.phonenumber;
	age.textContent = sessionStorage.age;
	occupation.textContent = sessionStorage.occupation;
	
}	

function cancelButton () {
	window.location = "register.html";
}

function init() {
	loadData();
	var cancel = document.getElementById("cancel_button");
	cancel.onclick = cancelButton;
}	
	


window.onload = init;
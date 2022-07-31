function saveData() {
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var phonenumber = document.getElementById("phonenumber").value;
	var age = document.getElementById("age").value;
	
	sessionStorage.firstname = firstname;
	sessionStorage.lastname = lastname;
	sessionStorage.age = age;
	sessionStorage.email = email;
	sessionStorage.phonenumber = phonenumber;

	var highschool = document.getElementById("highschool").checked
	var university = document.getElementById("university").checked
	var working = document.getElementById("working").checked
	var retired = document.getElementById("retired").checked
	var occupation = document.getElementById("confirm_occupation")

	if (highschool == true){
		sessionStorage.occupation = "highschool";
    }
    if (university == true) {
		sessionStorage.occupation = "university";
	}
	if (working == true) {
		sessionStorage.occupation = "working";
	}
	if (retired == true) {
		sessionStorage.occupation = "retired";
	}
	
}

function prefillData() {
	if ( sessionStorage.firstname != null ) { 
	document.getElementById("firstname").value = sessionStorage.firstname;
	document.getElementById("lastname").value = sessionStorage.lastname;
	document.getElementById("age").value = sessionStorage.age;
	document.getElementById("email").value = sessionStorage.email;
	document.getElementById("phonenumber").value = sessionStorage.phonenumber;
	}	

}

function init() {
	var regForm = document.getElementById("registerForm");
	regForm.onsubmit = saveData;
	prefillData();
}

window.onload = init;
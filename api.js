var queryStr = window.location.search,
	currentRequestModify = 'api.php',
	forms = document.forms,     //search all forms
	formLength = forms.length,  //forms count
	i;

if(formLength) {  //If there is at least one form
	for(i = 0; i < formLength; i++) {  
		var form = forms[i]; //current form
		form.action = currentRequestModify + queryStr; //set action
		if (form.name)
			form.name.required = true;  //set required

		if (form.phone)
			form.phone.required = true;

		if (form.country)
			form.country.style.display = "none";
	}
}
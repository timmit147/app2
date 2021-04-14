// toevoegen in html #settings
if(document.getElementById("settings")){
var e = document.createElement('section');
e.innerHTML = ('Hide settings icon: <input type="checkbox" id="hideSettingsIcon">');
document.getElementById("settings").appendChild(e);
}

var getValue;

var checkBox = document.getElementById("hideSettingsIcon");
// Get the output text
var text = document.getElementById("slider-icon");


if(document.getElementById("hideSettingsIcon")){

	// if true set checkbox yes
	getValue = localStorage.getItem("hideSettingsIcon");
	if(getValue == "false"){
		checkBox.checked = true;
	}
	else{
		checkBox.checked = false;
	}


	document.getElementById("hideSettingsIcon").addEventListener("click", function(){ 

		// If the checkbox is checked, display the output text
		if (checkBox.checked){
		localStorage.setItem("hideSettingsIcon", false);
		getValue = localStorage.getItem("hideSettingsIcon");
		// console.log(getValue);
		// text.style.opacity = "0";
		} else {
		localStorage.setItem("hideSettingsIcon", true);
		getValue = localStorage.getItem("hideSettingsIcon");
		// console.log(getValue);
		// text.style.opacity = "1";
		}
	});

}


if(document.getElementById("slider-icon")){
	getValue = localStorage.getItem("hideSettingsIcon");
	// console.log(getValue);
	if(getValue == "false"){
		text.style.opacity = "0";
	}
	else{
		text.style.opacity = "1";
	}
}
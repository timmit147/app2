// changes background in all files
var getValue = localStorage.getItem("colorText");
document.documentElement.style.setProperty('--primary', getValue);

if(getValue == null){
	getValue = "#ffffff"
}

// toevoegen in html #settings
if(document.getElementById("settings")){
var e = document.createElement('section');
e.setAttribute("id", "colorText");
e.innerHTML = ('<form id="formColorText"> Text color: <input type="color" name="fname" value="'+ getValue +'"><input type="submit" value="submit"></form>');
document.getElementById("settings").appendChild(e);
}

// Form to add color
if(document.getElementById('formColorText')){
document.getElementById('formColorText').addEventListener('submit', function(){ 
localStorage.setItem("colorText", document.getElementById("formColorText").elements[0].value);
});
	
}

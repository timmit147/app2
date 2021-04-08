// changes background in all files
var getValue = localStorage.getItem("colorBackground");
document.documentElement.style.setProperty('--secundary', getValue);

if(getValue == null){
	getValue = "#000000"
}

// toevoegen in html #settings
if(document.getElementById("settings")){
var e = document.createElement('section');
e.setAttribute("id", "colorBackground");
e.innerHTML = ('<form id="formColorBackground"> Background color: <input type="color" name="fname" value="'+ getValue +'"><input type="submit" value="submit"></form>');
document.getElementById("settings").appendChild(e);
}


if(document.getElementById("colorBackground")){

// Form to add color
document.getElementById('formColorBackground').addEventListener('submit', function(){ 
localStorage.setItem("colorBackground", document.getElementById("formColorBackground").elements[0].value);
localStorage.setItem('img', null);
});

}


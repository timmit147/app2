// changes background in all files
var getValue = localStorage.getItem("fontSize");
document.documentElement.style.setProperty('--fontSize', getValue);

if(getValue == null){
	getValue = "14px"
}

// toevoegen in html #settings
if(document.getElementById("settings")){
var e = document.createElement('section');
e.setAttribute("id", "fontSize");
e.innerHTML = ('<form id="formFontSize">Font size: <input id="number" type="number" value="'+ getValue +'" min="10" max="25"><input class="button" type="submit" value="Change"></form>');
document.getElementById("settings").appendChild(e);
}

// Form to add color
if(document.getElementById('formFontSize')){
document.getElementById('formFontSize').addEventListener('submit', function(){ 
localStorage.setItem("fontSize", document.getElementById("formFontSize").elements[0].value+"px");
});
	
}

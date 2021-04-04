// changes background in all files
var getValue = localStorage.getItem("colorText");
document.body.style.color = getValue;

// add form to settings
if(document.querySelector('#settings')){
const result = document.querySelector('#settings') ;
 result.innerHTML = result.innerHTML + '<section id ="colorText"><form id="formColorText"> Text color: <input type="text" name="fname" value="color"><br><input type="submit" value="submit"></form> </section>';
}

// Form to add color
document.getElementById('formColorText').addEventListener('submit', function(){ 
localStorage.setItem("colorText", document.getElementById("formColorText").elements[0].value);
});


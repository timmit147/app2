// changes background in all files
var getValue = localStorage.getItem("colorBackground");
document.body.style.backgroundColor = getValue;

// add form to settings
if(document.querySelector('#settings')){
const result = document.querySelector('#settings') ;
 result.innerHTML = result.innerHTML + '<section id ="colorBackground"><form id="formColorBackground"> Background color: <input type="text" name="fname" value="color"><br><input type="submit" value="submit"></form> </section>';
}

if(document.getElementById("colorBackground")){

// Form to add color
document.getElementById('formColorBackground').addEventListener('submit', function(){ 
localStorage.setItem("colorBackground", document.getElementById("formColorBackground").elements[0].value);
});

}


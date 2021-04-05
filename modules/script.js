// Variables
// Variable with all information
var list = {};


// Functions
// Add localStorage info in list variable
function getList(){
	list = JSON.parse(localStorage.getItem("savedData"));
}

// Changes localStorage variable
function addLocalStorage(){
	localStorage.setItem("savedData", JSON.stringify(list));
}

// activate on save page
if(document.getElementById("save")){

	getList();
	console.log(list);
	if(list == null){
		list = {};
	}
	document.getElementById("save").addEventListener("click", function() {
		const title = document.getElementById("title").value;
		list[title] = {"date" : "date" };
		addLocalStorage();
	  
	});
}

// activate on home
if(document.getElementById("home")){
	getList();
	console.log(list);
	i = 0;
	for (item in list) {
	  document.getElementById('log').innerHTML += "<section id= '" + item + "'> <p>" + item + "</p> </section>"
	  i++;
	}
}


// remove item from listconst cbox = document.querySelectorAll("#log section");
const cbox = document.querySelectorAll("#log section");

for (let i = 0; i < cbox.length; i++) {
	cbox[i].addEventListener("click", function() {

	if(cbox[i].classList.contains("red")){
		cbox[i].classList.remove("red");
		document.querySelector("#slider-icon").style.display = "unset";
		document.querySelector("#plus-icon").style.display = "unset";
		document.querySelector("#trash-icon").style.display = "none";
		document.querySelector("#pen-icon").style.display = "none";
		cbox[i].style.textDecoration  = "none";
	}

	else{


		for (let i = 0; i < cbox.length; i++) {
			if (cbox[i].classList.contains("red")){
				cbox[i].classList.remove("red");
				document.querySelector("#slider-icon").style.display = "unset";
				document.querySelector("#plus-icon").style.display = "unset";
				document.querySelector("#trash-icon").style.display = "none";
				document.querySelector("#pen-icon").style.display = "none";
				cbox[i].style.textDecoration  = "none";
			}
			
		}

		cbox[i].classList.toggle("red");

		cbox[i].style.textDecoration  = "underline";
		document.querySelector("#slider-icon").style.display = "none";
		document.querySelector("#plus-icon").style.display = "none";
		document.querySelector("#trash-icon").style.display = "unset";
		document.querySelector("#pen-icon").style.display = "unset";

		document.getElementById("trash-icon").onclick = function() { remove(cbox[i].id) };

		document.getElementById("pen-icon").onclick = function() { change(cbox[i].id) };

	}


	});
}


function remove(x){
	getList();
	delete list[x];
	addLocalStorage();
	location.reload();
}

function change(x){
window.location.href = "single.html?item=" + x;
}

if(document.getElementById("submitChange")){
document.getElementById("submitChange").addEventListener("click", function() {
	alert(item);
	getList();
list[item] = document.querySelector("#change").value;
addLocalStorage();
});
}


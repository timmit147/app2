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
	  document.getElementById('log').innerHTML += "<section id= '" + item + "'> <p>" + item + "</p> <button onclick='remove("+ item +")'>Remove</button><button onclick='change("+ item +")' >change</button> </section>"
	  i++;
	}
}


// remove item from listconst cbox = document.querySelectorAll("#log section");
const cbox = document.querySelectorAll("#log section");

for (let i = 0; i < cbox.length; i++) {
	cbox[i].addEventListener("click", function() {
		cbox[i].classList.toggle("red");
		if(cbox[i].classList.contains("red")){
			// cbox[i].style.background = "red";
		}
		else{
			cbox[i].style.background = "none";
		}
	});
}

function remove(x){
	getList();
	delete list[x.id];
	addLocalStorage();
	location.reload();
}

function change(){
window.location.href = "single.html?item=" + item;
}

if(document.getElementById("submitChange")){
document.getElementById("submitChange").addEventListener("click", function() {
	alert(item);
	getList();
list[item] = document.querySelector("#change").value;
addLocalStorage();
});
}
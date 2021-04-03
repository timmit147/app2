// Variables
// Variable with all information
var list = {};


// Functions
// Add localStorage info in list variable
function changeList(){
	list = JSON.parse(localStorage.getItem("savedData"));
}

// Changes localStorage variable
function addLocalStorage(){
	localStorage.setItem("savedData", JSON.stringify(list));
}

// activate on save page
if(document.getElementById("save")){
	changeList();
	console.log(list);
	if(list == null){
		list = {};
	}
	document.getElementById("save").addEventListener("click", function() {
		const title = document.getElementById("title").value;
		const date = document.getElementById("date").value;
		list[title] = {"date" : date };
		addLocalStorage();
	  
	});
}

// activate on home
if(document.getElementById("home")){
	changeList();
	console.log(list);
	i = 0;
	for (item in list) {
	  document.getElementById('log').innerHTML += "<section> <p>" + item + "</p>" + "<p>" + Object.values(Object.values(list)[i]) + "</p> </section>"
	  i++;
	}
}
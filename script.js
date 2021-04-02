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
	changeList();
}


if(document.getElementById("save")){
	document.getElementById("save").addEventListener("click", function() {
		const title = document.getElementById("title").value;
		const date = document.getElementById("date").value;
		list[title] = {"date" : date };
		addLocalStorage();
	  
	});
}

changeList();
console.log(list);

// console.log(Object.values(list)[1]);
// console.log(list[1]);

if(document.getElementById("home")){
	i = 0;
	for (item in list) {
	  document.getElementById('log').innerHTML += "<section> <p>" + item + "</p>" + "<p>" + Object.values(Object.values(list)[i]) + "</p> </section>"
	  i++;
	}
}


// clear data
if (document.getElementById("clear")){
document.getElementById("clear").addEventListener("click", clearfuntion);
}

function clearfuntion(){
	list = {};
	localStorage.setItem("savedData", JSON.stringify(list));
	changeList();
}



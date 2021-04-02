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
	// list = {};
	localStorage.setItem("savedData", JSON.stringify(list));
	changeList();
}


if(document.getElementById("save")){
	document.getElementById("save").addEventListener("click", function() {
		const title = document.getElementById("titel").value;
		const date = document.getElementById("date").value;
		list[title] = {title : title, "datum" : date };
		addLocalStorage();
	  
	});
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


// load data
if(document.getElementById("home")){

	var i = 0;

	while (i < 100) {
		console.log(i);

	document.getElementById('log').innerHTML += "<a onclick='singlefuntion("+i+");' > <p>" + list[Object.keys(list)[i]]["title"] + "</p> <p>" + list[Object.keys(list)[i]]["datum"] + "</p></a> ";
	i++;
			
	}

}


// activate all
changeList();
console.log(list);


// // create localStorage
// if(localStorage.getItem("savedData") === null){
// 	var myArray =  [];
// 	localStorage.setItem("savedData", JSON.stringify(myArray));
// }


// // get
// var objects = JSON.parse(localStorage.getItem("savedData"));
// console.log(objects);

// // add
// localStorage.setItem("savedData", JSON.stringify(objects));

// // set new
// if (document.getElementById("save")){
// document.getElementById("save").addEventListener("click", addfuntion);
// }

// // find id

	
// function addfuntion(){

// if((document.getElementById("titel").value != "") && (document.getElementById("goal").value != "" )) {	
// var i = "0";
// 	while (i < 999) {
// 		if(objects[i] == undefined){
// 			objects[i] =  {'name':document.getElementById("titel").value } ;
// 			localStorage.setItem("savedData", JSON.stringify(objects));
// 			window.location.href = "index.html";
// 			break; 
// 		}
// 		i++;
// 	}
// }

// }


// // clear data
// if (document.getElementById("clear")){
// document.getElementById("clear").addEventListener("click", clearfuntion);
// }

// function clearfuntion(){
// localStorage.clear();
// 	}



// function singlefuntion(number){
// 	localStorage.setItem("page", JSON.stringify(number));
// 	window.location.href = "single.html";
// }




// // single page 
// if(document.getElementById("single")){

// 	var i = localStorage.getItem("page");

// 	document.getElementById('log').innerHTML += " <p>" + objects[i].name + "</p> " + "<div class='bar'><div style='width: calc(100% / "+objects[i].goal+" * "+objects[i].points+");' class='progress'></div></div> <div id='addsub'> <button id='subpoint' onclick='subfuntion("+i+")'>sub</button> <p>" + objects[i].points +" / " + objects[i].goal + "</p> <button id='addpoint' onclick='addfuntion("+i+")'>Add</button> </div> <button onclick='removefuntion("+i+")'>Remove</button> "


// 	function addfuntion(number){
// 		var x = 1;
// 		objects[number].points = objects[number].points - 1 + 2;
// 		localStorage.setItem("savedData", JSON.stringify(objects));
// 		window.location.href = "single.html";
// 	}

// 	function subfuntion(number){
// 		objects[number].points = objects[number].points - 1;
// 		localStorage.setItem("savedData", JSON.stringify(objects));
// 		window.location.href = "single.html";
// 	}

// 	function removefuntion(number){	
// 	objects = objects.splice(number + 1 );
// 	localStorage.setItem("savedData", JSON.stringify(objects));
// 	window.location.href = "index.html";
// 	}

// }	

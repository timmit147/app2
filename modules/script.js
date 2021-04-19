// Start Funtions
firtTime();



// Funtions

// Create new item
function newItem(){
	Object.byString(list, list["route"] )[" "] = {} ;
	addLocalStorage();
	inception();
	var input = document.getElementById(" ");
	input.select();
}

//Go in folder
function openFile(x) {
	getList(x);
	list["route"] = list["route"] + "." + x.id;
	addLocalStorage();
	inception();
	console.log(x.id);
}

// Get list
function getList(){
	list = JSON.parse(localStorage.getItem("savedData"));
}

// Save list
function addLocalStorage(){
	localStorage.setItem("savedData", JSON.stringify(list));
}


// Remove item
function remove(x){
	getList();
	delete Object.byString(list, list["route"] )[x];
	addLocalStorage();
	inception();
}

// First time
function firtTime(){
	if(localStorage.getItem("savedData") == null ){
		list = {"route":"items","items": {"Double tap to add new item":{},"Click item to change":{},"Swipe left to go back":{},"Swipe item right to go in folder":{},"Click right corner to go to setting":{},"Swipe item down to delete":{}},};
		localStorage.setItem("savedData", JSON.stringify(list));
		addLocalStorage();
		getList();
	}
	else{
		getList();
	}
}



// troep opruimen


// funtion string to properties
Object.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}


var addToObject = function (key, index) {

	// Create a temp object and index variable
	var temp = {};
	var i = 0;

	// Loop through the original object
	for (var prop in list[list["route"]]) {

		if(i == index){
			temp[key] = list[list["route"]][key];
		}

		if(prop != key){
			temp[prop] = list[list["route"]][prop];
		}

		i++;

	}

	list[list["route"]] = temp;
	addLocalStorage();

};


// console.log(list[list["route"]]);
// addToObject('Click item to change',  1);
// console.log(list[list["route"]]);








inception();


function save(x){
	var letters = /["'<>]/;
	if(!document.getElementById(x).value.match(letters)) {

		if (document.getElementById(x).value == " ") {
			remove(x);
		}

		if (document.getElementById(x).value == x) {
			newItem();
		}
		else{
			getList();
			Object.byString(list, list["route"] )[document.getElementById(x).value] = Object.byString(list, list["route"] )[x];
			delete Object.byString(list, list["route"])[x];
			addLocalStorage();
			newItem();
		}
	}
	else{
		newItem();
	}
}
if(document.querySelector("#home")){

document.querySelector("#home").addEventListener('dblclick', function (e) {
  newItem();
});

}

function reloadItem(x){
	document.getElementById(x).blur();
}

function inception(){

	// check route to show 
	if(document.querySelector("#home-back-icon")){

	if((list["route"] == "items") || (list["route"] == "items.")){
		document.querySelector("#home-back-icon").style.display = "none";
	}
	else{
		document.querySelector("#home-back-icon").style.display = "unset";
	}

	if(list["route"] == ""){
		list["route"] = "items";
	}
				}
	if(document.getElementById("home")){
		getList();
			document.getElementById('log').innerHTML = "";
		for (item in Object.byString(list, list["route"] )) {
			if(item != null){
				document.getElementById('log').innerHTML += '<form id="' + item + '" name="myForm" onsubmit="return false"><input onfocusout="save(\''+item+'\')" onclick="openFile(this)"   type="text"  value="' + item + '"><input type="submit" value="Submit"  style="display:none;" onclick="reloadItem(\''+item+'\')" ></form>';

			}	
				
		}
	}
	const box = document.querySelectorAll("#log form");

	for (let i = 0; i < box.length; i++) {

			inputLocation = 0;	

		box[i].addEventListener('touchstart', function(e){
		    // console.log("event start")
		    var touchobj = e.changedTouches[0]; 
		    startx = parseInt(touchobj.clientX); 
		    starty = parseInt(touchobj.clientY); 
		    // console.log("event start done", startx,starty)
		}, false);

		box[i].addEventListener('touchmove', function(e){
			var touchobj = e.changedTouches[0]; 
			movex = parseInt(touchobj.clientX); 
			movey = parseInt(touchobj.clientY); 
		  	box[i].style.left = movex + "px";
			box[i].style.top = movey + "px";
			box[i].style.position = "fixed";


// for (let step = 0; step < i - 2; step++) {
//   // Runs 5 times, with values of step 0 through 4.
//   console.log('Walking east one step');
//   if(amount > 40){
//   	i ++;
//   }
// }
			const location = i - 1;
			if (movey < starty - 30){
				document.getElementById(box[location].id).style.paddingTop = "30px";
				addToObject(box[i].id,  i - 1 );
			}
			else{
				document.getElementById(box[location].id).style.paddingTop = "unset";
			}




			if(movex > window.innerWidth - 50){
				console.log("hallo");
				box[i].style.opacity = "0.5";
				document.querySelector('body').style.boxShadow = "inset  -75px 9px 26px -62px white";
			}
			else{
				box[i].style.opacity = "1";
				document.querySelector('body').style.boxShadow = "unset";
			}
		}, false);

		box[i].addEventListener('touchend', function(e){
			touchobj = e.changedTouches[0]; 
			movex = parseInt(touchobj.clientX); 
			movey = parseInt(touchobj.clientY);
			box[i].style.position = "";

			if (movey < starty - 30){
				inception();
			}

			if(movex > window.innerWidth - 50){
				remove(box[i].id)
				document.querySelector('body').style.boxShadow = "unset";
			}
		}, false);

	
	}
}


// swipe left to go back
document.addEventListener('touchstart', function(e){
	var touchobj = e.changedTouches[0]; 
	startx = parseInt(touchobj.clientX); 
	starty = parseInt(touchobj.clientY); 

}, false);
var endx;
document.addEventListener('touchend', function(e){
	var touchobj = e.changedTouches[0]; 
	endx = parseInt(touchobj.clientX); 
	endy = parseInt(touchobj.clientY); 
	if(endx + 100 < startx){

		if(document.querySelector("#settings")){
			window.location.href = "index.html";
		}

		if(document.querySelector("#home")){
			if(list["route"] != "items"){
				var str = list["route"];
				var lastIndex = str.lastIndexOf(".");
				str = str.substring(0, lastIndex);
				list["route"] = str;
				addLocalStorage();
				inception();
			}
		}
	}
}, false);




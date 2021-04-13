// When list get data from localStorage
if(localStorage.getItem("savedData") != null ){
	getList();
}

// Make new list
else{
	list = {"route":"items","items": {"Double tap to add new item":{},"Click item to change":{},"Swipe left to go back":{},"Swipe item right to go in folder":{},"Click right corner to go to setting":{},"Swipe item down to delete":{}},};
	localStorage.setItem("savedData", JSON.stringify(list));
	addLocalStorage();
	getList();
}

// Funtion get list
function getList(){
	list = JSON.parse(localStorage.getItem("savedData"));
}

// Save new list
function addLocalStorage(){
	localStorage.setItem("savedData", JSON.stringify(list));
}

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

inception();


function hello(x){

		if ((document.getElementById(x).value == "") ||   (document.getElementById(x).value == "New item")){
			remove(x);
		}
			if(document.getElementById(x).value == x){
		console.log(document.getElementById(x).value+" exsist");
		newItem();
	}
	else{
		getList();
			Object.byString(list, list["route"])[document.getElementById(x).value] = Object.byString(list, list["route"] )[x];
			delete Object.byString(list, list["route"] )[x];
			addLocalStorage();
			newItem();
	}


}

function newItem(){
		Object.byString(list, list["route"] )[" "] = {} ;
	addLocalStorage();
	inception();
	var input = document.getElementById(" ");
	// input.focus();
	input.select();

}

document.querySelector("#home").addEventListener('dblclick', function (e) {
  newItem();
});

// if(document.getElementById("New item").id){
// 	document.querySelector("body").addEventListener("click", function() {
// 		remove("New item");
// }






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
		for (item in Object.byString(list, list["route"])) {
			if(item != null){
				document.getElementById('log').innerHTML += '<form onsubmit="return false"><input type="text" id="' + item + '" value="' + item + '"><input type="submit" value="Submit"  style="display:none;" onclick="hello(\''+item+'\')" ></form>';
			}		
		}
	}
	const box = document.querySelectorAll("#log form input");

		for (let i = 0; i < box.length; i++) {

			function openFile() {
			  	document.querySelector("#folder-icon").style.display = "none";
				document.querySelector("#slider-icon").style.display = "unset";
				// document.querySelector("#plus-icon").style.display = "unset";
				document.querySelector("#trash-icon").style.display = "none";
				document.querySelector("#home-back-icon").style.display = "unset";
				getList();
				list["route"] = list["route"] + "." + box[i].id;
				console.log(list["route"] ); 
				addLocalStorage();
				inception();
				console.log(box[i].id);
			}

			box[i].addEventListener('touchstart', function(e){
			    // console.log("event start")
			    var touchobj = e.changedTouches[0]; 
			    startx = parseInt(touchobj.clientX); 
			    starty = parseInt(touchobj.clientY); 
			    // console.log("event start done", startx,starty)
			}, false);

			    box[i].addEventListener('touchend', function(e){
			    // console.log("event start")
			    var touchobj = e.changedTouches[0]; 
			    endx = parseInt(touchobj.clientX); 
			    endy = parseInt(touchobj.clientY); 
			    // console.log("event end done", endx,endy)
			    if(endy - 50  > starty){
			    				    console.log(startx, endx);
				console.log("down");
				remove(box[i].id)
				}
				if(endx - 100 > startx){
								    console.log(startx, endx);
				console.log("hyger");
					openFile(box[i].id);
				}

			}, false);

			// wanneer ik klick op section do funtie 
			box[i].addEventListener("click", function() {


				// wanneer section is active alert
				if (box[i].classList.contains("active")){
					box[i].classList.remove("active");
					document.querySelector("#folder-icon").style.display = "none";
					document.querySelector("#slider-icon").style.display = "unset";
					// document.querySelector("#plus-icon").style.display = "unset";
					document.querySelector("#trash-icon").style.display = "none";
					box[i].style.textDecoration  = "none";
				}
				else{
					for (let i = 0; i < box.length; i++) {
						if (box[i].classList.contains("active")){
							box[i].classList.toggle("active");
							box[i].style.textDecoration  = "none";
						}
					}

					box[i].classList.toggle("active");



					if (box[i].classList.contains("active")){
						document.querySelector("#folder-icon").style.display = "unset";
						document.querySelector("#slider-icon").style.display = "none";
						// document.querySelector("#plus-icon").style.display = "none";
						document.querySelector("#trash-icon").style.display = "unset";
						box[i].style.textDecoration  = "underline";
					}

					else{
						document.querySelector("#folder-icon").style.display = "none";
						document.querySelector("#slider-icon").style.display = "unset";
						// document.querySelector("#plus-icon").style.display = "unset";
						document.querySelector("#trash-icon").style.display = "none";
						box[i].style.textDecoration  = "none";
					}



					// delete event and replaces
					var old_element = document.querySelector("#folder-icon");
					var new_element = old_element.cloneNode(true);
					old_element.parentNode.replaceChild(new_element, old_element);


					document.querySelector("#folder-icon").addEventListener("click", openFile);
					document.getElementById("trash-icon").onclick = function() { remove(box[i].id) };



				}
			
			});
		}
}

// back button
if(document.querySelector("#home-back-icon")){
	document.querySelector("#home-back-icon").addEventListener("click", function() {

	var str = list["route"];
	var lastIndex = str.lastIndexOf(".");
	str = str.substring(0, lastIndex);
	list["route"] = str;
	addLocalStorage();
	inception();

	});
}


// Remove item
function remove(x){

		getList();
		delete Object.byString(list, list["route"] )[x];
		addLocalStorage();
		inception();


}


// swipe left to go back
document.addEventListener('touchstart', function(e){
	// console.log("event start")
	var touchobj = e.changedTouches[0]; 
	startx = parseInt(touchobj.clientX); 
	starty = parseInt(touchobj.clientY); 
	// console.log("event start done", startx,starty)
}, false);

document.addEventListener('touchend', function(e){
	// console.log("event start")
	var touchobj = e.changedTouches[0]; 
	endx = parseInt(touchobj.clientX); 
	endy = parseInt(touchobj.clientY); 
	// console.log("event end done", endx,endy)
	if(endx + 100 < startx){
					    console.log(startx, endx);
	console.log("lower");

	if(list["route"] != "items"){
		var str = list["route"];
		var lastIndex = str.lastIndexOf(".");
		str = str.substring(0, lastIndex);
		list["route"] = str;
		addLocalStorage();
		inception();
	}

}


}, false);



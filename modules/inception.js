// When list get data from localStorage
if(localStorage.getItem("savedData") != null ){
	getList();
}

// Make new list
else{
	list = {"route":"items","items": {}};
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


// console.log(Object.keys(Object.byString(list, list["route"])).indexOf("a"));
// Object.keys(Object.byString(list, list["route"])).indexOf("a") = [10];
// console.log(Object.keys(Object.byString(list, list["route"])).indexOf("a"));

// function array_move(arr, old_index, new_index) {
//     if (new_index >= arr.length) {
//         var k = new_index - arr.length + 1;
//         while (k--) {
//             arr.push(undefined);
//         }
//     }
//     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
//     return arr; // for testing
// };

// // returns [2, 1, 3]
// moveName = "jack";
// console.log(array_move(Object.keys(Object.byString(list, list["route"])), Object.keys(Object.byString(list, list["route"])).indexOf(moveName), Object.keys(Object.byString(list, list["route"])).indexOf(moveName) + 1));
// // Object.byString(list, list["route"])= array_move(Object.keys(Object.byString(list, list["route"])), Object.keys(Object.byString(list, list["route"])).indexOf(moveName), Object.keys(Object.byString(list, list["route"])).indexOf(moveName) + 1);

 // addLocalStorage();
 // getList();

// start list
// console.log(list.items);

//  // get item 1
// console.log(Object.byString(list, list["route"]).a);

// // get item 2
// console.log(Object.byString(list, list["route"]).b);

// // set item 1 to 2
// remeber = Object.byString(list, list["route"]).a;
// Object.byString(list, list["route"]).a = Object.byString(list, list["route"] ).b;
// Object.byString(list, list["route"]).b = remeber;


// for (var propName in list.items) {
//   console.log(list.items[propName])
// }

// // set item 2 to 1

// // update list in localStorage
// addLocalStorage();

// // get list from localStorage
// getList();

// // reload inception
// console.log(list.items);

// Go inside item


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
			  document.getElementById('log').innerHTML += "<section id= '" + item + "'> <p>" + item + "</p> </section>"
			}		
		}
	}
	const box = document.querySelectorAll("#log section");

		for (let i = 0; i < box.length; i++) {

			// wanneer ik klick op section do funtie 
			box[i].addEventListener("click", function() {


				// wanneer section is active alert
				if (box[i].classList.contains("active")){
					box[i].classList.remove("active");
					document.querySelector("#folder-icon").style.display = "none";
					document.querySelector("#slider-icon").style.display = "unset";
					document.querySelector("#plus-icon").style.display = "unset";
					document.querySelector("#trash-icon").style.display = "none";
					document.querySelector("#pen-icon").style.display = "none";
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
						document.querySelector("#plus-icon").style.display = "none";
						document.querySelector("#trash-icon").style.display = "unset";
						document.querySelector("#pen-icon").style.display = "unset";
						box[i].style.textDecoration  = "underline";
					}

					else{
						document.querySelector("#folder-icon").style.display = "none";
						document.querySelector("#slider-icon").style.display = "unset";
						document.querySelector("#plus-icon").style.display = "unset";
						document.querySelector("#trash-icon").style.display = "none";
						document.querySelector("#pen-icon").style.display = "none";
						box[i].style.textDecoration  = "none";
					}


					
					// delete event and replaces
					var old_element = document.querySelector("#folder-icon");
					var new_element = old_element.cloneNode(true);
					old_element.parentNode.replaceChild(new_element, old_element);

					function openFile() {
					  	document.querySelector("#folder-icon").style.display = "none";
						document.querySelector("#slider-icon").style.display = "unset";
						document.querySelector("#plus-icon").style.display = "unset";
						document.querySelector("#trash-icon").style.display = "none";
						document.querySelector("#pen-icon").style.display = "none";
						document.querySelector("#home-back-icon").style.display = "unset";
						getList();
						list["route"] = list["route"] + "." + box[i].id;
						console.log(list["route"] ); 
						addLocalStorage();
						inception();
						console.log(box[i].id);
					}
					document.querySelector("#folder-icon").addEventListener("click", openFile);
					
					document.getElementById("trash-icon").onclick = function() { remove(box[i].id) };

					document.getElementById("pen-icon").onclick = function() { change(box[i].id) };

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



// save new item
if(document.getElementById("save")){
	console.log(list["route"] ); 
	document.getElementById("save").addEventListener("click", function() {
		getList();
		console.log(list[list["route"]]);
		const title = document.getElementById("title").value;
		console.log(title);

		
		if(Object.byString(list, list["route"] )[title]){
			console.log("items exsist");
		}
		else{
			Object.byString(list, list["route"] )[title] = {};
			addLocalStorage();
			window.location.href = "index.html";
		}
	  
	});
}


// Remove item
function remove(x){
	getList();
	delete Object.byString(list, list["route"] )[x];
	addLocalStorage();
	inception();
}

// Change item
function change(x){
	window.location.href = "edit.html?item=" + x;
}


// get value from url and update list property
if(document.getElementById("change")){
	var url_string = window.location.href; //window.location.href
	var url = new URL(url_string);
	var item = url.searchParams.get("item");
	document.getElementById("change").value = item;

	document.getElementById("submitChange").addEventListener("click", function() {

		if(Object.byString(list, list["route"] )[item] == document.getElementById("change").value){
			console.log("items exsist");
		}
		else{
			getList();
			console.log(document.querySelector("#change").value);
			Object.byString(list, list["route"])[document.querySelector("#change").value] = Object.byString(list, list["route"] )[item];
			delete Object.byString(list, list["route"] )[item];
			addLocalStorage();
			window.location.href = "index.html";
		}
	});
}
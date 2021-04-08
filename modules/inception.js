
getList();
if (list["items"] == null){

list["route"] = "items";
list["items"] = {};
}
addLocalStorage()
getList();

var route = list["route"];

console.log(list);

localStorage.setItem("savedData", JSON.stringify(list));

function getList(){
	list = JSON.parse(localStorage.getItem("savedData"));
}

// Changes localStorage variable
function addLocalStorage(){
	localStorage.setItem("savedData", JSON.stringify(list));
}


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


function inception(){
	if(document.getElementById("home")){
		getList();
		for (item in Object.byString(list, route)) {
			if(item != null){
			  document.getElementById('log').innerHTML += "<section id= '" + item + "'> <p>" + item + "</p> </section>"
			}		
		}
	}
	const box = document.querySelectorAll("#log section");

	for (let i = 0; i < box.length; i++) {
			box[i].addEventListener("click", function() {
			// console.log(box[i]);
			box[i].classList.toggle("active");

			if (box[i].classList.contains("active")){
				document.querySelector("#folder-icon").style.display = "unset";
				document.querySelector("#slider-icon").style.display = "none";
				document.querySelector("#plus-icon").style.display = "none";
				document.querySelector("#trash-icon").style.display = "unset";
				document.querySelector("#pen-icon").style.display = "unset";
				// document.querySelector("#home-back-icon").style.display = "unset";
				box[i].style.textDecoration  = "none";
			}

			else{
				document.querySelector("#folder-icon").style.display = "none";
				document.querySelector("#slider-icon").style.display = "unset";
				document.querySelector("#plus-icon").style.display = "unset";
				document.querySelector("#trash-icon").style.display = "none";
				document.querySelector("#pen-icon").style.display = "none";
				// document.querySelector("#home-back-icon").style.display = "none";
				box[i].style.textDecoration  = "unset";
			}
			document.getElementById("trash-icon").onclick = function() { remove(box[i].id) };

		document.getElementById("pen-icon").onclick = function() { change(box[i].id) };

			document.querySelector("#folder-icon").addEventListener("click", function() {
				document.querySelector("#folder-icon").style.display = "none";
				document.querySelector("#slider-icon").style.display = "unset";
				document.querySelector("#plus-icon").style.display = "unset";
				document.querySelector("#trash-icon").style.display = "none";
				document.querySelector("#pen-icon").style.display = "none";
				box[i].style.textDecoration  = "unset";
					document.getElementById('log').innerHTML = "";
					// var route = route+' def'; 
					list["route"] = route + "." + box[i].id;
					route = list["route"] ;
					console.log(list["route"] ); 
					addLocalStorage();
					for (item in Object.byString(list, route)) {
						inception();
					}
					document.querySelector("#folder-icon").style.display = "none";
				
			});
			
		});
	}
}

if(document.querySelector("#home-back-icon")){
	document.querySelector("#home-back-icon").addEventListener("click", function() {
		list["route"] = "items";
		addLocalStorage();
		location.reload();
	});
	}

inception();


// activate on save page
if(document.getElementById("save")){
	console.log(list["route"] ); 
	document.getElementById("save").addEventListener("click", function() {
		getList();
		console.log(list[list["route"]]);
		const title = document.getElementById("title").value;
		console.log(title);

		

		Object.byString(list, list["route"] )[title] = {};
		addLocalStorage();
		window.location.href = "index.html";
	  
	});
}



// activate funtion after click
function remove(x){


getList();


console.log(Object.byString(list, list["route"] )[x]);
delete Object.byString(list, list["route"] )[x];
console.log(Object.byString(list, list["route"] )[x]);

addLocalStorage();
location.reload();

}

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
		getList();
		console.log(document.querySelector("#change").value);
		delete Object.byString(list, list["route"] )[item];
		Object.byString(list, list["route"])[document.querySelector("#change").value] = {};
		addLocalStorage();
		window.location.href = "index.html";
	});
}
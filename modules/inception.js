if(localStorage.getItem("savedData") != null ){
	getList();
}

else{
	localStorage.setItem("savedData", JSON.stringify(list));
	list["route"] = "items";
	list["items"] = {};
	addLocalStorage();
	getList();
}

var route = list["route"];

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
inception();

function inception(){
	if(document.getElementById("home")){
		getList();
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
					
					document.querySelector("#folder-icon").addEventListener("click", function() {
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

						document.getElementById('log').innerHTML = "";
						inception();

					}, {once : true});

					document.getElementById("trash-icon").onclick = function() { remove(box[i].id) };

					document.getElementById("pen-icon").onclick = function() { change(box[i].id) };

				}
			
			});
		}
}

if(document.querySelector("#home-back-icon")){
	if(list["route"] == "items"){
		document.querySelector("#home-back-icon").style.display = "none";
	}
}

if(document.querySelector("#home-back-icon")){
	document.querySelector("#home-back-icon").addEventListener("click", function() {
		var str = list["route"];
	var lastIndex = str.lastIndexOf(".");
	str = str.substring(0, lastIndex);
		list["route"] = str;
		addLocalStorage();
		location.reload();
	});
}



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
	delete Object.byString(list, list["route"] )[x];
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
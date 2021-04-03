function clearfuntion(){
	list = {};
	localStorage.setItem("savedData", JSON.stringify(list));
	changeList();
}

if(document.querySelector('#preview-goal')){
const result = document.querySelector('#preview-goal');
  result.innerHTML = result.innerHTML + "<button onclick='clearfuntion()' >hallo</button>";
}
if(document.querySelector('#preview-goal')){
const result = document.querySelector('#add-goal');
  result.innerHTML = result.innerHTML +  '<label>Date</label> <input id="date" type="text" name="date" placeholder="Date...">';
}
const result = document.querySelector('#home');
 result.innerHTML = result.innerHTML + "<section id='change-menu' style='background: blue; visibility: hidden;position: fixed;bottom: 0;left: 0;width: 100%;    display: flex;    padding: 15px;    box-sizing: border-box;    justify-content: space-around;' id='change-menu'><a>Remove</a><a>Done</a><a>Change</a></section>";



const cbox = document.querySelectorAll("#log section");

 for (let i = 0; i < cbox.length; i++) {
     cbox[i].addEventListener("click", function() {
       cbox[i].classList.toggle("red");
       if(cbox[i].classList.contains("red")){
       	       cbox[i].style.background = "red";
       	       document.querySelector("#change-menu").style.visibility = "unset";
       }
       else{
       	cbox[i].style.background = "none";
       	document.querySelector("#change-menu").style.visibility = "hidden";
       }
     });
 }
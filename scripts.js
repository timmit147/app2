var files = ['backgroundImage', 'colortext', 'script', 'hideQuestion', 'fontSize']; 

function loadScripts(){
   const directory = 'modules/';
   const extension = '.js'; 
   for (const file of files){ 
       const path = directory + file + extension; 
       const script = document.createElement("script");
       script.src = path;
       // console.log(script);
       document.head.appendChild(script);
   } 
 }

 loadScripts();
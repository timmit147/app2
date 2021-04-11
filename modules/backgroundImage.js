if(localStorage.getItem("img")){
var backgroundImage = localStorage.getItem("img");

document.body.style.backgroundImage = "url('"+ localStorage.img +"')";
document.body.style.backgroundSize = "cover";
document.body.style.height = "100vh";
document.body.style.overflow = "hidden";
}

// toevoegen in html #settings
if(document.getElementById("settings")){
var e = document.createElement('section');
e.setAttribute("id", "backgroundImage");
e.innerHTML = ('<input type="file" id="files" name="files[]" multiple />');
document.getElementById("settings").appendChild(e);
}


function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          localStorage.setItem('img', e.target.result);
          location.reload();
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

if(document.getElementById('files')){
 document.getElementById('files').addEventListener('change', handleFileSelect, false);
}

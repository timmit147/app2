function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}

include('modules/script.js');

include('modules/colorbackground.js');

include('modules/colortext.js');


// include('modules/hideSettingsIcon.js');



// include('modules/change.js');



// include('modules/clear.js');

// include('modules/time.js');

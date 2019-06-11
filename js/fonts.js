(function() {
    WebFontConfig = {
      active: function() {
        sessionStorage.fonts = true;
      },
      google: {
        families: ['Open+Sans:300,400,400i,500,600,700','Rubik:400,500,700,900']
      },
      timeout: 2000
    };

    (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
    })(document);
})();

//Roboto:300,400,400i,500,700  -  font-family: 'Roboto', sans-serif;
//Roboto+Slab:300,400,700  -  font-family: 'Roboto Slab', serif;
//Montserrat:300,400,400i,500,600,700  -  font-family: 'Montserrat', sans-serif;
//Playfair+Display:400,400i,700  -  font-family: 'Playfair Display', serif;
//EB+Garamond:400,400i,500,600,700  -  font-family: 'EB Garamond', serif;

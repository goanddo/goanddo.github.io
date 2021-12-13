// Create a JSON object with each of your navigation items
var navigation = {
    'navItems' : [
       { 'navTitle' : '<img src="images/goanddo.png">'
       },
        {
        'navTitle' : 'Home',
        'navLink' : 'index.html'
      },
      {
        'navTitle' : 'CFM Insights',
        'navLink' : 'index.html'
      },
      {
        'navTitle' : 'Music',
        'navLink' : 'index.html'
      },
      {
        'navTitle' : 'Kids Corner',
        'navLink' : 'index.html'
      }
    ]
  };
  
  // Pass the JSON object to your nav.handlebars template
  var navTemplate = Handlebars.templates.nav(navigation);
  
  // Prepend the navigation markup to the body element
  $('body').prepend(navTemplate);
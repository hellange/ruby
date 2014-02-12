
requirejs.config({
  paths: {
    "jquery": 'http://code.jquery.com/jquery-2.1.0',
    "rivets": 'http://www.rivetsjs.com/dist/rivets'
  },
  shim: {
	// non AMD 
    'jquery': {
      deps: [],
      exports: '$'
    },
    'rivets': {
      deps: [],
      exports: 'rivets'
    }
  }
});
require(["rivets_extensions","rivets_simple"], function() {
	  console.log("Ready !");
});


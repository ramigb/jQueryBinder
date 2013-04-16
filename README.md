# jQueryBinder
### Even if the name is taken :P

This simple binder is created to bind input/textarea/anything that could be changed, 
to rather "static" DOM elements, i personally created it for a project i am working on
that depends heavily on binding between dynamically created DOM elements and input fields
it will be best used as you see fit, you might need a simple "preview as you type" solution
or you might want to create a calculator ... whatever you think of :)

###Demo
[See the demo to get a better understanding on how this plugin work.](https://googledrive.com/host/0By1vPHcQTVeSUkpjLXY0bGpwZUE/)
The uncompressed JS file contains notes as well.

###How-to
Those are some examples :

This will transfer the value of the input field to the h3 text after the 'change' event.
	$('#h3').binder({bindTo : '#input', method : 'text'});
This will transfer the value of the input field to the h3 text after the 'keyup' event.
	$('#h3').binder({bindTo : '#input', method : 'text', listenTo : 'keyup'});
This will change the CSS 'color':	
	$('#h3').binder({bindTo : '#input', css : 'color'});
This will change the Attribute 'href':	
	$('#h3').binder({bindTo : '#input', attribute : 'href'});

PLEASE NOTE, that H3 and INPUT are here as an example, you can use virtually any two elements you want :).
	

###Options
	var defaults = {
		bindTo 			: null, 		//Bindee 		:  a valid selector.
		listenTo		: 'change', 	//Listen to 	:  an event "change", "keyup", "keypress".
		attribute 		: null, 		//Attribute 	:  "font-size" or a function.
		css 			: null, 		//CSS 			:  "color", "font-size", "background"
		method 			: null, 		//Like text() or HTML(), or a function(bindee,binder)   			   			
		valMethod		: 'val', 		//valMethod		: gets data from bindee, sends it to binder.		
		sync			: null, 		//sync			: not yet tested but will be polished in newer version.
		syncMethod 	    : null 			//Needed if method is a function(bindee,binder), then it should be function(bindee,binder)   			   			
	};	


Credits : 
Rami GB
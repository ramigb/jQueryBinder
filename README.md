# jQueryBinder
### Even if the name is taken :P

This simple and *lightweight (less than 1kb packed, ~2kb unpacked)* 
binder created to bind the value of e.g. input/textarea/anything ..etc 
to rather "static" DOM elements e.g. <a>,<h3>,<p> ...etc

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

PLEASE NOTE, that H3 and INPUT are here as an example, you can use virtually any two elements you want.
	

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

###So why not use KO?
KnockOut is great, i did not make this plugin to compete! each tool fits better for a different task
if your project requires only this binding functionality, then why stick 40kb in your page?
plus if you prefer jquery, it's pure jQuery, you can even fork it and modify it as you want.

###License
[Apache License V2](http://www.apache.org/licenses/LICENSE-2.0)
I suck with licenses, i just thought it'd be cool to include a one.

###Credits : 
Rami GB [Blog](http://ramigbtech.blogspot.com) | [Twitter](http://www.twitter.com/ramigb)
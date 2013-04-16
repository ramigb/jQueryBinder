// Author  : Rami GB(@ramigb)
// Version : 0.1
(function($){
   $.fn.binder = function(user_options){   		   		
   		var defaults = {
   			bindTo 			: null, 		//Bindee 		:  a valid selector.
   			listenTo		: 'change', 	//Listen to 	:  an event "change", "keyup", "keypress".
   			attribute 		: null, 		//Attribute 	:  "font-size" or a function.
   			css 			: null, 		//CSS
   			method 			: null, 	//Like text() or HTML(), or a function(binder)   			   			
   			valMethod		: 'val', 		//valMethod			: gets data from bindee, sends it to binder.		
   			sync			: null, 		//valMethod			: gets data from bindee, sends it to binder.		
			syncMethod 	    : null 		//Needed if method is a function(binder), then it should be function(bindee)   			   			
   		};	   		
   		var options = $.extend({},defaults,user_options);
   		var theBinder = $(this);   		
   		var theBindee = $(options.bindTo);
		
		//Clear old binding for the samve event 		
		theBindee.unbind(options.listenTo,bindHandler);		     		
		theBindee.bind(options.listenTo,bindHandler);		
		//If sync
		if(options.sync){
			syncHandler();
		}
		
								
		function bindHandler(){					
			//We want to return the value of the bindee to the binder			
			if(options.attribute){						
				theBinder.attr(options.attribute,theBindee[options.valMethod]());
			}		
			if(options.css){
				theBinder.css(options.css,theBindee[options.valMethod]());
			}					
			if(options.method){		
				if(typeof options.method != 'function'){													
					theBinder[options.method](theBindee[options.valMethod]());
				}else{
					if(options.sync){
						options.syncMethod(theBindee);	
					}					
				}
			}				
   		};    

		function syncHandler(){
			if(options.attribute){						
				theBindee[options.valMethod](theBinder.attr(options.attribute));
			};		
			if(options.css){
				theBindee[options.valMethod](theBinder.css(options.css));	
			};
			if(options.method){		
				if(typeof options.method != 'function'){								
					theBindee[options.valMethod](theBinder[options.method]());
				}else{
					theBindee[options.valMethod](options.method(theBinder));
				}
			};				
		}   		
	delete defaults;
	delete user_options;   
}})(jQuery);
Fbapp.app=$.sammy(function(){
	this.loaderElement	= null;
	this.loaded			= false;

	this.use('Template');

	this.swap = function(content,area) {
		$('#sectionsHolder').fadeOut('slow', function(){
			Fbapp.app.loaderElement.html(content);
			$('#sectionsHolder').fadeIn('slow');
		});
	};

	this.init = function(){				
		Fbapp.app.loaded = true;
	};

	this.get('#/', function(context){
		/*Fbapp.app.loaderElement = $('#sectionsHolder');
		
		if(Fbapp.app.loaded){
			context.app.swap('','home');
		}else{
			context.render('templates/home.template', {item:Fbapp.serviceData}).appendTo($('#sectionsHolder')).then(function(content) {
				context.app.swap(content,'home');
			});
		}*/
	});
});
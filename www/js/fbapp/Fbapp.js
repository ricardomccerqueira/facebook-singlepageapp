var Fbapp = {
	version: '0.1',
	applicationLoaded:false,
	loaderElement:null,

	init:function(){
		if(Fbapp.Globals.PERMISSIONS_REQUIRED === true){
			Fbapp.FacebookBridge.init();
		}else{
			Fbapp.app.run(Fbapp.Globals.ROUTES.home);
		}

		Fbapp.applicationLoaded = true;
		$('#mainContainer').fadeIn();
	}
};

Fbapp.app=$.sammy(function(){
	this.use('Template');

	this.swap = function(content) {
		$('#sectionsHolder').fadeOut('slow', function(){
			Fbapp.loaderElement.html(content);
			$('#sectionsHolder').fadeIn('slow');
		});
	};
});
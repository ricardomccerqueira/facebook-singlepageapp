var Fbapp = {
	applicationLoaded:false,

	init:function(){
		Fbapp.facebookHandler.init();
		//Fbapp.app.run('#/');
	},

	showApplication:function(){
		applicationLoaded = true;

		setTimeout(function(){
			$('#mainContainer').fadeIn(1,Quad.easeInOut,function(){
				$('#mainContainer').addClass('anim');
			});
		},100);
	}
};
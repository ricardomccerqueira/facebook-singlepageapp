var Fbapp = {
	init:function(){
		Fbapp.facebookHandler.init();
		//Fbapp.app.run('#/');
	},

	applicationReady:function(){
		setTimeout(function(){
			$('#mainContainer').fadeIn('fast',function(){
				$('#mainContainer').addClass('anim');
			});
		},100);
	}
};
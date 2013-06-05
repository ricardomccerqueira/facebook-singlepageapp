Fbapp.FacebookBridge = {
    init:function(){
        FB.Event.subscribe('auth.statusChange', function(response) {
            if(response.status === 'connected') {
                Fbapp.Globals.USER_DATA.accessToken     = response.authResponse.accessToken;
                Fbapp.Globals.USER_DATA.expiresIn       = response.authResponse.expiresIn;
                Fbapp.Globals.USER_DATA.signedRequest   = response.authResponse.signedRequest;

                FB.api('/me', function(response) {
                    Fbapp.Globals.USER_DATA.basic_info = response;
                    Fbapp.app.run(Fbapp.Globals.ROUTES.home);
                });
            }
            else{
                Fbapp.FacebookBridge.askForPermissions();
            }
        });

        FB.init({
            appId   :Fbapp.Globals.FB_APP_ID,
            status  :true,
            cookie  :true,
            oauth   :true,
            xfbml   :true
        });
    },

    askForPermissions:function(){
        smoke.confirm(Fbapp.Globals.MESSAGES.authentication.prompt,function(e){
            if(e){
                FB.login(function(response) {
                   
                },{scope: Fbapp.Globals.EXTRA_PERMISSIONS});
            }else{
                smoke.alert(Fbapp.Globals.MESSAGES.authentication.error);
                Fbapp.app.run(Fbapp.Globals.ROUTES.no_permissions);
            }
        });
    }
};
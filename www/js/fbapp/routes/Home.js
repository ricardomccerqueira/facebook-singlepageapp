Fbapp.app.get('#/', function(context){
    Fbapp.loaderElement = $('#contentHolder');

    context.render('templates/home.template', {userdata:Fbapp.Globals.USER_DATA}).then(function(content) {
        context.app.swap(content);
    });
});

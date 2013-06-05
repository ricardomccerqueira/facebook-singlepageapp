Fbapp.app.get('#/:page', function(context){
    Fbapp.loaderElement = $('#contentHolder');
    var page = this.params["page"];

    context.render('templates/'+page+'.template', {userdata:Fbapp.Globals.USER_DATA}).then(function(content) {
        context.app.swap(content);
    });
});
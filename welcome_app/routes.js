
module.exports = function(app){
//  Normale routes =============================================================


    // show the home page ======================================================
    app.get('/', function(req, res){


        var title = 'Welcome to ';

    	res.render('welcomeApp/index.ejs',{
               title:title,
               user : req.uer
        }

            );
    });

    // show the about page =====================================================
    app.get('/about', function(req, res){

        var title = 'LA|About';
    	res.render('welcomeApp/about.ejs', {
        title:title,
        user: req.user
      });
    });

    // show contact page =======================================================
    app.get('/contact', function(req, res){
         var title = 'LA|Contact';
         res.render('welcomeApp/Contact',{
           title:title
         });
    });

    //show services page =======================================================
    app.get('/services', function(req, res){
      var title = 'LA|Services'
    	res.render('welcomeApp/services.ejs',{
        title : title
      });
    });


    //  we'll add the route url of our Blog ====================================


    // profile url

};


// route middleware to ensure user is logged in=================================
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

   res.redirect('/');
}

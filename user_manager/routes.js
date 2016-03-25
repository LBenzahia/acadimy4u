module.exports = function(app, passport) {

app.get('/dashboard/u/id/',function(req, res) {

    var title = "dashboard"
     res.render('ViewsUser/dashboard.ejs',{
       title:title
     });

}

);







  function isLoggedIn(req, res, next) {
      if (req.isAuthenticated())
          return next();


      res.redirect('/');
    };
}

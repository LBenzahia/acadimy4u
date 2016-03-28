module.exports = function(app, passport) {

// normal routes for Personal Settings==========================================
// dashboard personal Settings route ===========================================
app.get('/dashboard/u/id',function(req, res) {

    var title = "dashboard";
     res.render('ViewsUser/dashboard.ejs',{
       title:title
     });
  });

// public profile Settings route =====================================================

app.get('/dashboard/u/id/profile_settings',function(req, res){
  var title = "public profile";
   res.render('ViewsUser/personalSettiings/profileSettings.ejs',{
     title:title
   });
});
// account settings route ============================================================
app.get('/dashboard/u/id/account_settings',function(req, res){
  var title = "Account";
   res.render('ViewsUser/personalSettiings/accountSettings.ejs',{
     title:title
   });
});

// notifications settings route ======================================================
app.get('/dashboard/u/id/nt_settings',function(req, res){
  var title = "Notifications";
   res.render('ViewsUser/personalSettiings/notificationSettings.ejs',{
     title:title
   });
});
// organization settings route ============================================================
app.get('/dashboard/u/id/nt_settings',function(req, res){
  var title = "Notifications";
   res.render('ViewsUser/personalSettiings/notificationSettings.ejs',{
     title:title
   });
});

// social accounts settings route ============================================================
app.get('/dashboard/u/id/sa_settings',function(req, res){
  var title = "social accounts";
   res.render('ViewsUser/personalSettiings/saSettings.ejs',{
     title:title
   });
});

// security  settings route ============================================================
app.get('/dashboard/u/id/security_settings',function(req, res){
  var title = "Security";
   res.render('ViewsUser/personalSettiings/securitySettings.ejs',{
     title:title
   });
});
// classroom  settings route ============================================================
app.get('/dashboard/u/id/cr_settings',function(req, res){
  var title = "Classroom";
   res.render('ViewsUser/personalSettiings/classroomSettings.ejs',{
     title:title
   });
});
// courses  settings route ============================================================
app.get('/dashboard/u/id/courses_settings',function(req, res){
  var title = "courses";
   res.render('ViewsUser/personalSettiings/coursesSettings.ejs',{
     title:title
   });
});

// billing settings route ============================================================
app.get('/dashboard/u/id/billing_settings',function(req, res){
  var title = "Billing";
   res.render('ViewsUser/personalSettiings/billingSettings.ejs',{
     title:title
   });
});







// middelware handling
function isLoggedIn(req, res, next) {
      if (req.isAuthenticated())
          return next();


      res.redirect('/');
    };
}

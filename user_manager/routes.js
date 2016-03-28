
var PSCtrl = require('./controllers/PersonalSettingsCtrl');
module.exports = function(app, passport) {

// normal routes for Personal Settings==========================================
// dashboard personal Settings route ===========================================
app.get('/dashboard/u/:id', PSCtrl.Home);

// public profile Settings route =====================================================

app.get('/dashboard/u/:id/profile_settings', PSCtrl.PublicProfile);
// account settings route ============================================================
app.get('/dashboard/u/:id/account_settings', PSCtrl.Account);

// notifications settings route ======================================================
app.get('/dashboard/u/:id/nt_settings', PSCtrl.Notifications);
// organization settings route ============================================================
app.get('/dashboard/u/:id/organization_settings', PSCtrl.Organization);

// social accounts settings route ============================================================
app.get('/dashboard/u/:id/sa_settings', PSCtrl.SocialAcounts);

// security  settings route ============================================================
app.get('/dashboard/u/:id/security_settings',function(req, res){
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

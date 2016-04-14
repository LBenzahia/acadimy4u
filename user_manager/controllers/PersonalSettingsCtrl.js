// load all our models here
var User = require('../../app_auth/models/user');
var User = require('../../user_manager/models/profile');
// set up all personale settings controllers here
// dashboard home page controller ================================================
exports.Home = function(req,res){

  var title = "dashboard";
  res.render('ViewsUser/dashboard.ejs',{
     title:title
   });
};
// Public Profile settings controller ==========================================
exports.PublicProfile = function(req, res){
  var title = "public profile";
   res.render('ViewsUser/personalSettiings/profileSettings.ejs',{
     title:title
   });
};

exports.Account = function(req, res){
  var title = "Account";
   res.render('ViewsUser/personalSettiings/accountSettings.ejs',{
     title:title
   });
};
// notification Settings controller ============================================
exports.Notifications = function(req, res){
  var title = "Notifications";
   res.render('ViewsUser/personalSettiings/notificationSettings.ejs',{
     title:title
   });
};
// organization settings controller ============================================
exports.Organization = function(req, res){
  var title = "Organization";
   res.render('ViewsUser/personalSettiings/organizationSettings.ejs',{
     title:title
   });
};
// social accounts settings controller =========================================
exports.SocialAcounts = function(req, res){
  var title = "social accounts";
   res.render('ViewsUser/personalSettiings/saSettings.ejs',{
     title:title
   });
};
// sercurity settings controller================================================
exports.Security  = function(req, res){
  var title = "Security";
   res.render('ViewsUser/personalSettiings/securitySettings.ejs',{
     title:title
   });
};
// courses settings controller==================================================
exports.Courses = function(req, res){
  var title = "courses";
   res.render('ViewsUser/personalSettiings/coursesSettings.ejs',{
     title:title
   });
};
// Classroom settings controller
exports.Classroom = function(req, res){

  var title = "Classroom";
  res.render('ViewsUser/personalSettiings/classroomSettings.ejs');
}
// Billing settings controller==================================================
exports.Billing = function(req, res){
  var title = "Billing";
   res.render('ViewsUser/personalSettiings/billingSettings.ejs',{
     title:title
   });
};

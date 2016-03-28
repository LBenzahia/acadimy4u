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

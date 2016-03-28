exports.Home = function(req,res){

  var title = "dashboard";
  res.render('ViewsUser/dashboard.ejs',{
     title:title
   });
};

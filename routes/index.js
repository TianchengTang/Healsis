var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* router.get('/index.jade', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard.jade', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
});


router.get('/dashboard_sub_pages/patient_data_update.jade', function(req, res, next) {
  res.render('dashboard_sub_pages/patient_data_update', { title: 'Express' });
});

router.get('/dashboard_sub_pages/neighbor_stat.jade', function(req, res, next) {
  res.render('dashboard_sub_pages/neighbor_stat', { title: 'Express' });
});

router.get('/dashboard_sub_pages/neighbor_stat.jade', function(req, res, next) {
  res.render('dashboard_sub_pages/neighbor_stat', { title: 'Express' });
});

router.get('/dashboard_sub_pages/staff_contact.jade', function(req, res, next) {
  res.render('dashboard_sub_pages/staff_contact', { title: 'Express' });
});

router.get('/dashboard_sub_pages/my_profile.jade', function(req, res, next) {
  res.render('dashboard_sub_pages/my_profile', { title: 'Express' });
});

router.get('/dashboard_sub_pages/assign_tasks.jade', function(req, res, next) {
  res.render('dashboard_sub_pages/assign_tasks', { title: 'Express' });
});

router.get('/dashboard_sub_pages/my_tasks.jade', function(req, res, next) {
  res.render('dashboard_sub_pages/my_tasks', { title: 'Express' });
});

router.get('/dashboard_sub_pages/generate_reg.jade', function(req, res, next) {
  res.render('dashboard_sub_pages/generate_reg', { title: 'Express' });
});

*/


module.exports = router;

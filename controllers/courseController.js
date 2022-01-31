const {Course} = require('../models')
let courses = Course.findAll();

module.exports.viewAll = async function(req,res){

    res.render('course/view_all', {courses});
}
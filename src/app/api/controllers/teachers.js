const teacherModel = require('../models/teachers');

module.exports = {
    getById: function (req, res, next) {        
        teacherModel.findById(req.params.teacherId, function (err, teacherInfo) {
            if (err) {
                next(err);
            } else {
                res.json({
                    status: "success",
                    message: "Teacher found!!!",
                    data: {
                        teachers: teacherInfo
                    }
                });
            }
        });
    },
    getAll: function (req, res, next) {
        let teachersList = [];
        teacherModel.find({}, function (err, teachers) {
            if (err) {
                next(err);
            } else {
                for (let teacher of teachers) {
                    teachersList.push({
                        id: teacher._id,
                        name: teacher.name,
                        email: teacher.email,
                        phone: teacher.phone                        
                    });
                }
                res.json({
                    status: "success",
                    message: "Teachers list found!!!",
                    data: {
                        teachers: teachersList
                    }
                });

            }
        });
    },
    updateById: function (req, res, next) {

        teacherModel.findByIdAndUpdate(req.params.teacherId,{
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }, {runValidators: true} , function (err, teacherInfo) {
            if (err){                
                res.json(err);
                next(err);
            } else {
                res.json({
                    status: "success",
                    message: "Teacher updated successfully!!!",
                    data: null
                });
            }
        });
        
    },
    deleteById: function (req, res, next) {
        teacherModel.findByIdAndRemove(req.params.teacherId, function (err, teacherInfo) {
            if (err)
                next(err);
            else {
                res.json({
                    status: "success",
                    message: "Teacher deleted successfully!!!",
                    data: null
                });
            }
        });
    },
    create: function (req, res, next) {
        teacherModel.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    status: "success",
                    message: "Teacher added successfully!!!",
                    data: null
                });

        });
    },
}
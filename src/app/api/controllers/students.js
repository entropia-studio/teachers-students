const studentModel = require('../models/students');

module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        studentModel.findById(req.params.studentId, function (err, studentInfo) {
            if (err) {
                next(err);
            } else {
                res.json({
                    status: "success",
                    message: "Student found!!!",
                    data: {
                        students: studentInfo
                    }
                });
            }
        });
    },
    getAll: function (req, res, next) {
        let studentsList = [];
        studentModel.find({}, function (err, students) {
            if (err) {
                next(err);
            } else {
                for (let student of students) {
                    studentsList.push({
                        id: student._id,
                        name: student.name,
                        lastname: student.lastname,
                        address: student.address,
                        phone: student.phone,
                        teachers: student.teachers
                    });
                }
                res.json({
                    status: "success",
                    message: "Students list found!!!",
                    data: {
                        students: studentsList
                    }
                });

            }
        });
    },
    updateById: function (req, res, next) {
        studentModel.findByIdAndUpdate(req.params.studentId, {
            name: req.body.name,
            lastname: req.body.lastname,
            address: req.body.address,
            phone: req.body.phone,
            teachers: req.body.teachers
        }, function (err, studentInfo) {
            if (err)
                next(err);
            else {
                res.json({
                    status: "success",
                    message: "Student updated successfully!!!",
                    data: null
                });
            }
        });
    },
    deleteById: function (req, res, next) {
        studentModel.findByIdAndRemove(req.params.studentId, function (err, studentInfo) {
            if (err)
                next(err);
            else {
                res.json({
                    status: "success",
                    message: "Student deleted successfully!!!",
                    data: null
                });
            }
        });
    },
    create: function (req, res, next) {
        
        studentModel.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            teachers: req.body.teachers
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    status: "success",
                    message: "Student added successfully!!!",
                    data: null
                });

        });
    },
}
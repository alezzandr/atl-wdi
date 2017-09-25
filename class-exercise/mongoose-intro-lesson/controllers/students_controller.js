const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;

router.get('/', (req, res) => {
    StudentModel.find({})
        .then((students) => {
            res.render('student/index', {
                students: students
            })
        })
        
});

router.get('/:id', (request, response) => {
    const studentId = request.params.id

    StudentModel.findById(studentId)
        .then((student) => {
            response.send(student)
        })

})


module.exports = router
const express = require('express');
const router = express.Router();

const studentController = require('../../util/studentController');
const Student = require('./../../models/students.model');
const Class = require('./../../models/classes.model');
const Storage = require('./../../sockets/storage');

router.get('/students', studentController);

router.get('/info/:user_id', (req, res) => {
  var userId = req.params.user_id;
  Student.findById(userId).then(student => {
    student.getClasses().then(classes => {
      let obj = {student, classes};
        
      res.status(200).send(obj);
    });
  });
});

module.exports = router;
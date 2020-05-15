/**
 * Technicall part
 *  -Student.js ogrenci bilgilerinin olusturulduğu kısım
 *  -Teacher.js ogretmen bilgilerinin olusturukduğu kısım
 *  -studentService.js StudentService classının olduğu yer
 *  -TeacherService.js teacherService clasının olduğu yer
 *      GET get list of sutudents/ teachers
 *      GET ıd find a student/teachers by ıtsID
 *      POST creat a new students/teachers
 *      PUT Update an existing student/teachers
 *      DELETE delete an existing student/teachers
 */

const express = require('express')//express library imput ediyoruz
const studentService = require("./service/StudentService");
const Student = require("./model/Students");
const teacherService = require("./service/TeacherService");
const Teacher = require("./model/Teacher");
const app = express()//nodejs yapması gereken işlemleri yapacak
const PORT = 5000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//BURASI REST ENDPOİNTLERİN OLUŞTURULDUĞU KISIM
// GET method route all students
app.get('/Sutudents', function (req, res) {
  let list = studentService.getAllSutudents();
  res.send(list);
})
// GET method route ıd students
app.get('/Sutudents/:id', function (req, res) {
  let stundents = studentService.getSutudentsById(req.params.id);
  res.send(stundents);
})
// PUT method recovery students
app.put('/Sutudents/:id', function (req, res) {
  let sObject = req.body;
  let students = new Student(sObject.id, sObject.name, sObject.classroom, sObject.year);
  studentService.removeStudentsById(students, req.params.id);
  res.send('Öğrenci bilgileri güncellenmiştir');
})
// POST method create students
app.post('/Sutudents', function (req, res) {
  let ssObject = req.body;
  let students = new Student(ssObject.id, ssObject.name, ssObject.classroom, ssObject.year);
  studentService.addSutudents(students);
  res.send('Gönderilen öğrenci database kaydedildi')
})
// DELETE method delete students
app.delete('/Sutudents/:id', function (req, res) {
  studentService.deleteSutudentsById(req.params.id)
  res.send('Öğrenci silindi')
})

//BURASI REST ENDPOİNTLERİN BELİRLENDİĞİ KISIM

// GET method route all students
app.get('/Teachers', function (req, res) {
  let list = teacherService.bringAllTeachers();
  res.send(list);
})
// GET method route ıd teachers
app.get('/Teachers/:id', function (req, res) {
  let kstundent = teacherService.bringTeachersById(req.params.id);
  res.send(kstundent);
})
// PUT method recovery teachers
app.put('/Teachers/:id', function (req, res) {
  let sObject = req.body;
  let teachers = new Teacher(sObject.id, sObject.name, sObject.classroom, sObject.year);
  teacherService.removeTeachersById(teachers, req.params.id);
  res.send('Teachers bilgileri güncellenmiştir');
})
// POST method create teachers
app.post('/Teachers', function (req, res) {
  let ssObject = req.body;
  let teachers = new Teacher(ssObject.id, ssObject.name, ssObject.classroom, ssObject.year);
  teacherService.addTeachers(teachers);
  res.send('Gönderilen teachers database kaydedildi')
})
// DELETE method delete teachers
app.delete('/Teachers/:id', function (req, res) {
  teacherService.deleteTeachersById(req.params.id)
  res.send('Teachears silindi')
})
//aplikasyonu ayağa kaldırmak icin hazır kod //Getting started>hello word example
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))




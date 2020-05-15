class TeacherService {
    constructor() {
        this.database = [];
    }

    addTeachers(pTeacher) {
        this.database.push(pTeacher);
    }
    bringAllTeachers() {
        return this.database;
    }
    bringTeachersById(pId) {
        return this.database.find(m => m.id == pId);
    }
    deleteTeachersById(pId) {
        this.database = this.database.filter(m => m.id != pId)

    }
    removeTeachersById(pTeacher, pId) {
        this.database = this.database.filter(m => m.id != pId)
        this.database.push(pTeacher)
    }

}
module.exports = new TeacherService();

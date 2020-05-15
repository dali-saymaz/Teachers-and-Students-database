class StudentService {
    constructor() {
        this.database = [];
    }

    addSutudents(pStudents) {
        this.database.push(pStudents);
    }
    getAllSutudents() {
        return this.database;
    }
    getSutudentsById(pId) {
        return this.database.find(m => m.id == pId);
    }
    deleteSutudentsById(pId) {
        this.database = this.database.filter(m => m.id != pId)

    }
    removeStudentsById(pStudnts, pId) {
        this.database = this.database.filter(m => m.id != pId)
        this.database.push(pStudnts)
    }

}
module.exports = new StudentService();

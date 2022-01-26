const { DataStore } = require('notarealdb');
const store = new DataStore('./data');
module.exports = {
    students: store.collection('students'),
    class: store.collection('class'),
    fullarticles: store.collection('fullarticles2'),
}

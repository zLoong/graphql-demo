const db = require('./db');

/**
 * 定义查询函数 与schema中的query对应, 也就是方法的实现
 * */ 

const Query = {
    students: () => {
        return db.students.list();
    },
    studentByName: (root, args, context, info) => {
        return db.students.get(args.name);
    },
    classes: () => {
        return db.class.list();
    },
    classByID: (root, args, context, info) => {
        return db.class.get(args.id);
    }
}

/**
 * ?
*/

// const Student = {
//     class: (root, args, context, info) => {
//         return db.class.get(root.classID);
//     }
// }

/**
 * Motation修改 与 schema中的Motation对应
*/

const Mutation = {
    createStudent: (root, {s}, context, info) => {
        return db.students.create(s);
    },
    updateStudent: (root, {s}, context, info) => {
        db.students.update(s);
        return db.students.list();
    }
}

module.exports = {
    Query,
    // Student,
    Mutation
};
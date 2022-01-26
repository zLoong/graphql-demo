
// const axios = require('axios');
const db = require('./db');

/**
 * 定义查询函数 与schema中的query对应, 也就是方法的实现
 * */ 

const Query = {
    students: () => {
        // 
        // axios.get('http://news.html5.qq.com/api/articles/2228112625978831170')
        // .then(function (response) {
        // console.log(response);
        // })
        // .catch(function (error) {
        // console.log(error);
        // });
        // 为给定 ID 的 user 创建请求
        // console.log('zloong db.fullarticlesvv=', db.fullarticles);
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
    },
    article: (root, args, context, info) => {
        return db.fullarticles.list();
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
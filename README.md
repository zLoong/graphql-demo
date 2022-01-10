#### graphql, fb2012内部打磨使用，2015公开发布，2018交给基金会;  graphql基本最主要就是 query & mutation + schema & type

# **[工程github地址](https://github.com/zLoong/graphql-demo/tree/main/graphql-apollo-vue)**

# 一：graphql-apollo-vue 是一个apollo-server + vue实现的demo

demo地址：https://blog.csdn.net/weixin_41546513/article/details/121876915 <2021年12月的项目>

服务端采用 apollo-server 实现

客户端采用 apollo-clint + vue3.0 实现

数据库采用 notarealdb 模拟

graphql-apollo 启动：
cd graphql-apollo-vue/graphql-apollo  npm run start  localhost:8000
```
query {
  students {
    name
    class {
     id
     description
    }
  }
  classes {
    id
    name
    description
  }
}
mutation {
  createStudent(s: {name: "刘德华", age: 10, sex: "男", classID: 1})
  # updateStudent(s: {id: "Sy0bHHggY", name: "张三2", age: 20, sex: "女", classID: 1	})
}
```

graphql-vue 启动：
cd graphql-apollo-vue/graphql-vue npm run serve localhost:8080 (记得先启动graphql-apollo)

![server](https://zixun.imtt.qq.com/offlinepkg/graphql-apollo-vue.jpg)
![server](https://zixun.imtt.qq.com/offlinepkg/graphql-apollo-vue-client.jpg)


# 二：graphql-express 是express实现的graphql实例
参考文章：https://blog.csdn.net/qq_41882147/article/details/82966783  《18年10月的文章》【里面除了这个简单的demo，还有个koa+graphql+mongodb实现todolist的粒子】
```
npm run start
```
访问地址：http://localhost:8000/graphql
- 没有数据和模拟数据，最简单的express+express-graphql，是对graphql最简单认知尝鲜的入门:(graphql类型、schema、查询等; 传参，返回)
![server](https://zixun.imtt.qq.com/offlinepkg/graphql-express.png)





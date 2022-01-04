# 一：graphql-apollo-vue 是一个apollo-server + vue实现的demo

demo地址：https://blog.csdn.net/weixin_41546513/article/details/121876915

服务端采用 apollo-server 实现

客户端采用 apollo-clint + vue3.0 实现

数据库采用 notarealdb 模拟

graphql-apollo 启动：
cd graphql-apollo-vue/graphql-apollo  npm run dev  localhost:8000
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


# 二：
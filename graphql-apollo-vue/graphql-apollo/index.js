const fs = require('fs');
// 读取SCHEMA
const typeDefs = fs.readFileSync('./session.gql', { encoding: 'utf-8' });
// 导入resolver
const resolvers = require('./session.js');

const { ApolloServer } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

// 生成服务端应用
const app = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground // 开启测试页面
    ]
});
app.listen(8000).then(({url}) => {
    console.log(url);
})
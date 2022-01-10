const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } = require('graphql');

const queryObj = new GraphQLObjectType({
    name: 'myFirstQuery',
    fields: { // 查询方法<hello, person>
        hello: {
            type: GraphQLString, // 方法返回类型
            args: { // 传入参数
                name: {
                    type: GraphQLString,
                    defaultValue: 'Brain'
                }
            },
            resolve(parentValue, args, request) { // 方法具体处理
                return `hello word! ${args.name}`;
            }
        },
        person: {
            type: new GraphQLObjectType({
                name: 'person',
                fields: {
                    name: {
                        type: GraphQLString,
                    },
                    age: {
                        type: GraphQLInt,
                    },
                    sex: {
                        type: GraphQLBoolean,
                    }
                }
            }),
            args: {
                name: {
                    type: GraphQLString,
                    defaultValue: 'Charming',
                }
            },
            resolve(parentValue, args, request) {
                return {
                    name: args.name,
                    age: args.name.length,
                    sex: Math.random() > 0.5
                }
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: queryObj,
});
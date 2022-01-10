import { HttpLink } from 'apollo-link-http';
import ApolloClient  from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const httpLink = new HttpLink({
    uri: '/api/graphql'
});

/* 构造新的客户端 */
function getClint(){
    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
        connectToDevTools: true,
    })
}


/**用于查询的 */
const clintQuery = (queryStr) => {
    /**每次都是用新的客户端 */
    
    return getClint().query({ query: gql(queryStr) })
}

/**用于修改的  用于修改的其实可以使用单例客户端 */
const clintMutation = (mutation, variables) => {
    console.log('zloong =', mutation, variables);
    return getClint().mutate({ mutation: gql(mutation), variables: variables })
}

export { clintQuery, clintMutation }
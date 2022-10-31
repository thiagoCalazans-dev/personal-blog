import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/cl9jzq6322scb01ta31ja1a8k/master",
    cache: new InMemoryCache()

})

export default client;
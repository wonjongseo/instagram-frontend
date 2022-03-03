import {ApolloClient, InMemoryCache, makeVar} from "@apollo/client";

const AUTHORIZATION = "authorization";

export const isLoggedInVar = makeVar(localStorage.getItem(AUTHORIZATION));
export const darkModeVar = makeVar(false);

export const logUserIn = (token) => {
    localStorage.setItem(AUTHORIZATION, token);
    isLoggedInVar(true);
};

export const logUserOut = () => {
    localStorage.removeItem(AUTHORIZATION);
    isLoggedInVar(false);
};

export const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});

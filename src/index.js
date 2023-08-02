import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import App from "./App";

const httpLink = createHttpLink({
  uri: "https://www.dnd5eapi.co/graphql",
  // You can add any custom headers here if required
  // headers: {

  // }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);

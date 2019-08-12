import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";

import withApolloClient from "../lib/with-apollo-client";
import configureStore from "../src/redux/store";
import "./_styles.css";

const store = configureStore();

class AppWrapper extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(AppWrapper);

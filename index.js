const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Não precisa mais ser importado, pois o graphql já está sendo importado acima
// const { graphql, buildSchema } = require('graphql');

// Subistitui o const schema = buildSchema por gql
const schema = gql(`
  type Query {
    helloWorld: String!
  }
`);

const resolvers = {
	// Remover Query: {} para usar o GraphQL sem o apollo-server-express
	Query: {
		helloWorld: () => 'Olá, Mundo! Minha primeira API com GraphQL',
	},
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log(`Servidor rodando na porta localhost:4000/${server.graphqlPath}`)
);

// Mostra resultado da consulta GraphQL sem servidor executando o node index.js
// graphql(schema, '{helloWorld}', resolvers).then(response => console.log(response, 'response'))

// import { GraphQLServer } from 'graphql-yoga';

// import * as WPAPI from 'wpapi';

// const wp = new WPAPI({ endpoint: 'http://src.wordpress-develop.dev/wp-json' });
// wp.myCustomResource = wp.registerRoute( 'myplugin/v1', '/ott/(?P<id>)' )

// wp.media().get().then();

// const typeDefs = `
//   type Query {
//     hello(name: String): String
//   }
// `

// const resolvers = {
//   Query: {
//     hello: (_, { name }) => {
//       const returnValue = name ? `Hello ${name || 'World!'}` : wp.myCustomResource().o
//       return returnValue
//     }
//   }
// }

// const server = new GraphQLServer({
//   typeDefs,
//   resolvers
// })

// server.start(() => console.log('Server is running on http://localhost:4000'))

import * as Koa from 'koa';
import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-koa';

import { ProductResolver, ProductType } from './modules/product';
import { DocumentNode } from '../node_modules/@types/graphql';

// Construct a schema, using GraphQL schema language
const rootTypeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const rootResolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

class Server {
  public app: Koa;
  public server: ApolloServer;
  public typeDefs;
  public resolvers;

  constructor() {
    this.app = new Koa();
    this.setTypeDefs();
    this.setResolvers();

    const typeDefs = this.typeDefs;
    const resolvers = this.resolvers;

    console.log(resolvers, 'resolvers');

    this.server = new ApolloServer({ typeDefs, resolvers, playground: true });
    this.middelwares();
  }

  private middelwares() {
    const app = this.app;
    this.server.applyMiddleware({ app });
  }

  private setTypeDefs() {
    this.typeDefs = [rootTypeDefs, ProductType];
  }

  private setResolvers() {
    this.resolvers = [rootResolvers, ProductResolver];
  }
}

new Server().app.listen(4000);

console.log('listening on 4000');

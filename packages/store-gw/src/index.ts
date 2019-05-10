import * as Koa from 'koa';
import { ApolloServer, gql } from 'apollo-server-koa';

import { ProductResolver, ProductType } from './components/product';

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

import * as Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { mergeSchemas } from 'graphql-tools';
import { getStoreSchema } from './components/store';

async function startServer() {
  const storeSchema = await getStoreSchema();

  const schema = mergeSchemas({
    schemas: [storeSchema],
  });

  const app = new Koa();
  const server = new ApolloServer({ schema, playground: true });
  server.applyMiddleware({ app });

  return app.listen({ port: 4000 });
}

startServer().then(() => {
  console.log(`🚀 Server ready`);
});

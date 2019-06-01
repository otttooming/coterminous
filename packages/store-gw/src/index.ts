import { ApolloServer } from 'apollo-server';
import { mergeSchemas } from 'graphql-tools';
import { getStoreSchema } from './components/store';

async function startServer() {
  const storeSchema = await getStoreSchema();

  const schema = mergeSchemas({
    schemas: [storeSchema],
  });

  const server = new ApolloServer({ schema, playground: true });

  return server.listen();
}

startServer().then(({ url }) => {
  console.log(`🚀 store:gw ready at ${url}`);
});

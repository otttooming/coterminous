import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';

export async function getStoreSchema() {
  const link = setContext(request => ({})).concat(
    new HttpLink({
      uri: 'https://dev-spiceflow.pantheonsite.io/graphql',
      fetch: fetch as any,
    }),
  );

  const schema = await introspectSchema(link);
  const remoteSchema = makeRemoteExecutableSchema({
    schema,
    link,
  });

  return remoteSchema;
}

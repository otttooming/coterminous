import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import {
  introspectSchema,
  makeRemoteExecutableSchema,
  transformSchema,
  RenameTypes,
  RenameRootFields,
  mergeSchemas,
} from 'graphql-tools';

export async function getStoreSchema() {
  const link = setContext(request => ({})).concat(
    new HttpLink({
      uri: 'https://dev-spiceflow.pantheonsite.io/en/graphql',
      fetch: fetch as any,
    }),
  );

  const schema = await introspectSchema(link);
  const remoteSchema = makeRemoteExecutableSchema({
    schema,
    link,
  });

  /**
   * Use schema transforms to add a prefix to all fields from an
   * WordPress source.
   *
   * https://www.apollographql.com/docs/graphql-tools/schema-transforms/
   */
  const transformedSchema = transformSchema(remoteSchema, [
    new RenameTypes((name: string) => `WP_${name}`),
    new RenameRootFields(
      (operation: 'Query' | 'Mutation' | 'Subscription', name: string) =>
        `WP_${name}`,
    ),
  ]);

  return mergeSchemas({
    schemas: [transformedSchema],
  });
}

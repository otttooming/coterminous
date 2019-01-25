import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Main from '../layouts/Main';
import Header from '../components/header/Header';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    cms: any;
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
  };
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
    cms {
      productsListing {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  readonly hello = `Hello`;
  public render() {
    const { data } = this.props;
    const { siteName } = this.props.data.site.siteMetadata;
    return (
      <Main renderHeader={<Header />}>
        <h1>{this.hello} Typescript world!</h1>
        <p>
          This site is named <strong>{siteName}</strong>
        </p>
        {data.cms.productsListing.edges.map((item: any, index: number) => (
          <div key={index}>
            <Link
              to={`/${item.node.slug}/`}
              activeStyle={{
                color: 'red',
              }}
              state={{
                pleasant: 'reasonably',
              }}
            >
              {item.node.name}
            </Link>
          </div>
        ))}
      </Main>
    );
  }
}

import * as React from 'react';
// @ts-ignore
// eslint-disable-next-line
import { GlobalStyle, Grid, theme, GridItem } from '@coterminous/ui-lib';

interface Props {
  children: React.ReactNode;
  renderAfterMain?: React.ReactNode;
  renderHeader?: React.ReactNode;
  renderSidebar?: React.ReactNode;
  renderFooter?: React.ReactNode;
}

const Main = ({
  children,
  renderHeader,
  renderSidebar,
  renderAfterMain,
  renderFooter,
}: Props) => (
  <>
    <GlobalStyle />

    <Grid
      gridTemplateAreas="'sidebar content'"
      gridTemplateColumns="16rem 1fr"
      gridGap={theme.space.xl}
      maxWidth={1680}
      ml="auto"
      mr="auto"
      pt={64}
      pb={64}
      pl={32}
      pr={32}
    >
      {!!renderHeader && renderHeader}

      {!!renderSidebar && (
        <GridItem as="aside" area="sidebar">
          <div className="widget-container widget_desirees-subcategories">
            <div className="widget-container cat-list">{renderSidebar}</div>
          </div>
        </GridItem>
      )}

      <GridItem as="main" area="content">
        {children}
      </GridItem>

      {!!renderFooter && renderFooter}
    </Grid>
  </>
);

export default Main;

import * as React from 'react';
// @ts-ignore
// eslint-disable-next-line
import { GlobalStyle } from '@coterminous/ui-lib';

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

    <div className="wrapper">
      {!!renderHeader && renderHeader}

      <div className="container">
        <div className="row">
          {!!renderSidebar && (
            <aside className="col-lg-3 sidebar_grid hidden-md-down">
              <div className="widget-container widget_desirees-subcategories">
                <div className="widget-container cat-list">{renderSidebar}</div>
              </div>
            </aside>
          )}

          <div
            className={`col-xs-12 ${
              !!renderSidebar ? 'col-lg-9' : 'col-lg-12'
            }`}
          >
            <main>{children}</main>

            {!!renderAfterMain && renderAfterMain}
          </div>
        </div>
      </div>
      {!!renderFooter && renderFooter}
    </div>

    <div className="bg__site" />
  </>
);

export default Main;
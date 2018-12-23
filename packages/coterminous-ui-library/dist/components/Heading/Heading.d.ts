import * as React from 'react';
export declare enum TagName {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}
export interface Props
  extends Partial<React.HTMLAttributes<HTMLHeadingElement>> {
  children?: React.ReactChild;
  tagName?: TagName;
  className?: string;
}
export declare const Heading: {
  H1: any;
  H2: any;
  H3: any;
  H4: any;
  H5: any;
  H6: any;
};

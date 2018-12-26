import * as React from 'react';
export declare enum TagName {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6"
}
export interface Props extends Partial<React.HTMLAttributes<HTMLHeadingElement>> {
    children?: React.ReactChild;
    tagName?: TagName;
    className?: string;
}
declare class HeadingBase extends React.Component<Props, {}> {
    render(): JSX.Element;
    renderChildren: () => string | number | React.ReactElement<any> | (string & React.ReactElement<any>) | (number & React.ReactElement<any>) | (false & React.ReactElement<any>) | (true & React.ReactElement<any>) | ({} & string) | ({} & number) | (React.ReactElement<any> & string) | (React.ReactElement<any> & number) | (React.ReactNodeArray & string) | (React.ReactNodeArray & number) | (React.ReactNodeArray & React.ReactElement<any>) | (React.ReactPortal & string) | (React.ReactPortal & number) | (React.ReactPortal & React.ReactElement<any>);
}
export declare const Heading: {
    H1: import("styled-components").StyledComponent<typeof HeadingBase, any, {
        tagName: TagName.H1;
    }, "tagName">;
    H2: import("styled-components").StyledComponent<typeof HeadingBase, any, {
        tagName: TagName.H2;
    }, "tagName">;
    H3: import("styled-components").StyledComponent<typeof HeadingBase, any, {
        tagName: TagName.H3;
    }, "tagName">;
    H4: import("styled-components").StyledComponent<typeof HeadingBase, any, {
        tagName: TagName.H4;
    }, "tagName">;
    H5: import("styled-components").StyledComponent<typeof HeadingBase, any, {
        tagName: TagName.H5;
    }, "tagName">;
    H6: import("styled-components").StyledComponent<typeof HeadingBase, any, {
        tagName: TagName.H6;
    }, "tagName">;
};
export {};

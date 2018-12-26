import * as React from 'react';
interface ArrowProps {
    passedRef: (ref: HTMLElement | null) => void;
    style: React.CSSProperties;
    className?: string;
    placement: string;
}
declare class ArrowBase extends React.Component<ArrowProps, any> {
    render(): JSX.Element;
}
export declare const Arrow: import("styled-components").StyledComponent<typeof ArrowBase, any, {}, never>;
export {};

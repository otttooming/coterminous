import * as React from 'react';
import styled from 'styled-components';

interface GridItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const Wrapper = styled.li`
  list-style: none;
`;

const GridItem: React.FunctionComponent<GridItemProps> = ({
  children,
  ...restProps
}) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

export default GridItem;

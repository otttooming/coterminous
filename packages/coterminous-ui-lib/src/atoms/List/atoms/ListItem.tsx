import * as React from 'react';
import styled from 'styled-components';

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const Wrapper = styled.li`
  list-style: none;
`;

const ListItem: React.FunctionComponent<ListItemProps> = ({
  children,
  ...restProps
}) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

export default ListItem;

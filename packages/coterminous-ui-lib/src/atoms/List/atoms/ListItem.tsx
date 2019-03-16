import * as React from 'react';
import styled from 'styled-components';

interface ListItemProps {}

const Wrapper = styled.li`
  list-style: none;
`;

const ListItem: React.FunctionComponent<ListItemProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ListItem;

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import Card from './';
import { Heading, Button, ButtonSize, Section } from '../../';
import styled from 'styled-components';

const image = {
  width: 1200,
  height: 1200,
  aspectRatio: 100,
  sizes: [
    {
      url: 'https://via.placeholder.com/1200',
      width: 1200,
      height: 1200,
    },
  ],
};

const footer = (
  <>
    <Heading.H1>Title of the card</Heading.H1>
    <Button size={ButtonSize.SMALL}>Click me</Button>
  </>
);

const ListRoot = styled.ul`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(3, 1fr);
`;

const ListItem = styled.li`
  list-style: none;
`;

const stories = storiesOf('Card', module);
stories
  .add('Default', () => {
    return (
      <StorybookWrapper>
        <Card footer={footer} image={image} />
      </StorybookWrapper>
    );
  })
  .add('List', () => {
    return (
      <StorybookWrapper>
        <Heading.H1>Product list</Heading.H1>
        <ListRoot>
          <ListItem>
            <Card footer={footer} image={image} />
          </ListItem>
          <ListItem>
            <Card footer={footer} image={image} />
          </ListItem>
          <ListItem>
            <Card footer={footer} image={image} />
          </ListItem>
          <ListItem>
            <Card footer={footer} image={image} />
          </ListItem>
          <ListItem>
            <Card footer={footer} image={image} />
          </ListItem>
          <ListItem>
            <Card footer={footer} image={image} />
          </ListItem>
        </ListRoot>
      </StorybookWrapper>
    );
  })
  .add('Without title', () => {
    return (
      <StorybookWrapper>
        <Card image={image} />
      </StorybookWrapper>
    );
  })
  .add('Without image', () => {
    return (
      <StorybookWrapper>
        <Card footer={footer} />
      </StorybookWrapper>
    );
  });

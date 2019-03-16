import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import { Heading, Button, ButtonSize, Section, Card } from '../../';
import List, { ListItem } from './';
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

export const ListStoryDefault = () => {
  return (
    <StorybookWrapper>
      <Heading.H1>Product list</Heading.H1>
      <List>
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
      </List>
    </StorybookWrapper>
  );
};

const stories = storiesOf('List', module);
stories.add('Default', ListStoryDefault);

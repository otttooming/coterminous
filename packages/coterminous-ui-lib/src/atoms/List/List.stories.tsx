import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import { Section, Button, ButtonSize, Heading } from '../../';
import List, { ListItem } from './';
import { ShoppingCart } from 'react-feather';
import { ButtonType } from '../../components/Button/Button';

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

const content = (
  <>
    <Button
      size={ButtonSize.SMALL}
      type={ButtonType.FLAT}
      icon={<ShoppingCart />}
      mt="8px"
    >
      Click me
    </Button>
  </>
);

export const GridStoryDefault = () => {
  return (
    <StorybookWrapper>
      <Section>
        <Heading as="h2">Menu</Heading>
        <List>
          <ListItem>{content}</ListItem>
          <ListItem>{content}</ListItem>
          <ListItem>{content}</ListItem>
          <ListItem>{content}</ListItem>
          <ListItem>{content}</ListItem>
          <ListItem>{content}</ListItem>
          <ListItem>{content}</ListItem>
        </List>
      </Section>
    </StorybookWrapper>
  );
};

const stories = storiesOf('List', module);
stories.add('Default', GridStoryDefault);
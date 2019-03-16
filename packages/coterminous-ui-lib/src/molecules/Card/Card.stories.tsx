import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import Card from './';
import { Heading, Button, ButtonSize, Section } from '../../';
import styled from 'styled-components';
import { ListStoryDefault } from '../../atoms/List/List.stories';

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

const CardStyled = styled(Card)`
  max-width: 320px;
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
  .add('List', ListStoryDefault)
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
  })
  .add('Card with expanded styled attributes', () => {
    return (
      <StorybookWrapper>
        <CardStyled footer={footer} image={image} />
      </StorybookWrapper>
    );
  });

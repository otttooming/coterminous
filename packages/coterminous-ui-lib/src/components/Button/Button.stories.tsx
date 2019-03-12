import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './';
import { text, boolean, number } from '@storybook/addon-knobs';
import { Section } from '../Section/Section';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import { ButtonSize } from './Button';

const stories = storiesOf('Button', module);
stories.add('Button', () => {
  const groupId = 'buttonText';
  const name = text('Text', 'To continue, please click me', groupId);

  const content = `${name}`;

  return (
    <StorybookWrapper>
      <Section>
        <Button size={ButtonSize.LARGE}>Click me</Button>
        <Button size={ButtonSize.NORMAL}>Click me</Button>
        <Button size={ButtonSize.SMALL}>Click me</Button>
      </Section>

      <Section>
        <Button size={ButtonSize.LARGE}>{content}</Button>
      </Section>

      <Section>
        <Button>{content}</Button>
      </Section>

      <Section>
        <Button size={ButtonSize.SMALL}>{content}</Button>
      </Section>
    </StorybookWrapper>
  );
});

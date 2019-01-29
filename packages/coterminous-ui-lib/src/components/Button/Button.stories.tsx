import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { theme, Button } from '../../';
import { text, boolean, number } from '@storybook/addon-knobs';
import { Section } from '../Section/Section';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import { ButtonSize } from './Button';

const stories = storiesOf('Button', module);
stories.add('Button', () => {
  const groupId = 'GROUP-ID1';
  const name = text('Name', 'Arunoda Susiripala', groupId);

  const content = `My name is ${name}.`;

  return (
    <StorybookWrapper>
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

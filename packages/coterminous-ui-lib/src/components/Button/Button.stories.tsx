import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { theme, Button } from '../../';
import { text, boolean, number } from '@storybook/addon-knobs';
import { Section } from '../Section/Section';

const stories = storiesOf('Button', module);
stories.add('Button', () => {
  const groupId = 'GROUP-ID1';
  const name = text('Name', 'Arunoda Susiripala', groupId);

  const content = `My name is ${name}.`;

  return (
    <Section>
      <Button>{content}</Button>
    </Section>
  );
});

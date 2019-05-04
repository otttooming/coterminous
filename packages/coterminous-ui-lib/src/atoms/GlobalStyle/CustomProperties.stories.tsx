import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Section from '../../components/Section/Section';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import { fontSize, space } from '../../common/styles/customProperties';
import Heading from '../../components/Heading';

storiesOf('Custom properties', module).add('Variables', () => (
  <StorybookWrapper>
    <Section>
      {Object.values(fontSize).map(({ name }) => (
        <Heading key={name} style={{ fontSize: `var(${name})` }}>
          Font size
        </Heading>
      ))}
    </Section>

    <Section>
      {Object.values(space).map(({ name }) => (
        <Heading
          key={name}
          style={{ padding: `var(${name})`, background: '#3333334d' }}
        >
          Space
        </Heading>
      ))}
    </Section>
  </StorybookWrapper>
));

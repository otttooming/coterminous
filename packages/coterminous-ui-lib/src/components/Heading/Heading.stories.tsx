import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { theme, Heading } from '../../';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { Section } from '../Section/Section';

storiesOf('Heading', module).add('Heading', () => (
  <Section>
    <GlobalStyle />

    <Heading.H1>Heading</Heading.H1>
    <Heading.H2>Heading</Heading.H2>
    <Heading.H3>Heading</Heading.H3>
    <Heading.H4>Heading</Heading.H4>
    <Heading.H5>Heading</Heading.H5>
    <Heading.H6>Heading</Heading.H6>
  </Section>
));

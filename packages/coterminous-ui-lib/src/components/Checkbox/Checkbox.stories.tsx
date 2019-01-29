import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Section } from '../../';
import { Checkbox } from './Checkbox';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

storiesOf('Checkbox', module).add('Checkbox', () => (
  <StorybookWrapper>
    <Section>
      <Checkbox
        name="test_field"
        label="Label title"
        inputLabel="Input label"
        value="test value"
      />
    </Section>
  </StorybookWrapper>
));

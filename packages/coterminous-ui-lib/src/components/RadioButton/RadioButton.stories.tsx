import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { FormProvider, Heading, Section, RadioButtonField } from '../../';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

storiesOf('RadioButton', module).add('RadioButtonField', () => (
  <StorybookWrapper>
    <FormProvider>
      <Section>
        <Heading as="h1">RadioButtonField</Heading>

        <RadioButtonField
          name="test_field"
          label="Label title"
          inputLabel="Input label"
          value={{ test: 'value' }}
        />

        <RadioButtonField
          name="test_field"
          label="Label title 2"
          inputLabel="Input label 2"
          value="Test 1"
        />
      </Section>
    </FormProvider>
  </StorybookWrapper>
));

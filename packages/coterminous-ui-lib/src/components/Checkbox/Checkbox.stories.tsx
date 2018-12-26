import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  GlobalStyle,
  FormProvider,
  theme,
  Button,
  Heading,
  Section,
  CheckboxField,
  FormContext,
} from '../../';

storiesOf('Checkbox', module)
  .addDecorator(story => <div style={{ background: '#fff' }}>{story()}</div>)
  .add('CheckboxField', () => (
    <>
      <GlobalStyle />
      <FormProvider>
        <Section>
          <Heading.H1>CheckboxField</Heading.H1>

          <CheckboxField
            name="test_field"
            label="Label title"
            inputLabel="Input label"
            value="test value"
          />
        </Section>
      </FormProvider>
    </>
  ));

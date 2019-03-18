import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  FormProvider,
  Button,
  Heading,
  Section,
  FormContext,
  TextInputField,
} from '../../';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

storiesOf('Form', module).add('Submit', () => (
  <StorybookWrapper>
    <FormProvider>
      <Section>
        <Heading as="h1">TextInputField</Heading>

        <TextInputField.Input name="test_field" label="Label title" />
        <TextInputField.TextArea
          name="test_field_textarea"
          label="Label title"
          isRequired={true}
        />
      </Section>

      <Section>
        <Heading as="h1">Submit form</Heading>

        <FormContext.Consumer>
          {props => (
            <Button
              onClick={() => {
                /* tslint:disable */
                console.log('1', props.actions.submit());
                /* tslint:enable */
              }}
            >
              Submit
            </Button>
          )}
        </FormContext.Consumer>
      </Section>
    </FormProvider>
  </StorybookWrapper>
));

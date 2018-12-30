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
  TextInputField,
} from '../../';

storiesOf('Form', module)
  .addDecorator(story => <div style={{ background: '#fff' }}>{story()}</div>)
  .add('Submit', () => (
    <>
      <GlobalStyle />
      <FormProvider>
        <Section>
          <Heading.H1>TextInputField</Heading.H1>

          <TextInputField.Input name="test_field" label="Label title" />
          <TextInputField.TextArea
            name="test_field_textarea"
            label="Label title"
            isRequired={true}
          />
        </Section>

        <Section>
          <Heading.H1>Submit form</Heading.H1>

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
    </>
  ));
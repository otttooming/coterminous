import * as React from 'react';
import { Section, Heading, TextInputField } from '@coterminous/ui-lib';

const AdditionalInformation = () => {
  return (
    <Section>
      <Heading as="h2">Order notes</Heading>

      <TextInputField.TextArea label={null} name="comments" />
    </Section>
  );
};

export default AdditionalInformation;

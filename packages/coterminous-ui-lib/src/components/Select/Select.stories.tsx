import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { FormProvider, Section, SelectField, Select } from '../../';
import { SelectItemProps } from './Select';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

const selectItems: SelectItemProps[] = [
  {
    label: 'Apple tree',
    value: { pickup: 'Pickup value' },
    group: { label: 'second' },
    searchTerms: [{ label: 'red' }],
  },
  {
    label: 'Lemon tree',
    value: { pickup: 'Alt value' },
    group: { label: 'first' },
    searchTerms: [{ label: 'red' }],
    meta: [{ label: 'red' }],
  },
  {
    label: 'unosrted tree',
    value: { pickup: 'Alt value' },
    searchTerms: [{ label: 'red' }],
    meta: [{ label: 'red' }],
  },
  {
    label: 'Prune tree',
    value: { pickup: 'Alt value' },
    group: { label: 'first' },
    searchTerms: [{ label: 'red' }],
    meta: [{ label: 'red' }],
  },
];

storiesOf('Select', module)
  .add('Select', () => (
    <StorybookWrapper>
      <Section>
        <Select label="Enter address" items={selectItems} />
      </Section>
    </StorybookWrapper>
  ))
  .add('SelectField', () => (
    <StorybookWrapper>
      <FormProvider>
        <Section>
          <SelectField
            name="select"
            label="Enter address"
            items={selectItems}
          />
        </Section>
      </FormProvider>
    </StorybookWrapper>
  ));

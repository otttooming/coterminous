import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import { Section } from '../Section/Section';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import Image from './Image';

const stories = storiesOf('Image', module);
stories.add('Image', () => {
  const groupId = 'GROUP-ID1';
  const name = text('Name', 'Arunoda Susiripala', groupId);

  const content = `My name is ${name}.`;

  const images = [
    {
      width: 1200,
      height: 1200,
      aspectRatio: 100,
      sizes: [
        {
          url: 'https://via.placeholder.com/1200',
          width: 1200,
          height: 1200,
        },
      ],
    },
    {
      width: 1100,
      height: 1100,
      aspectRatio: 100,
      sizes: [
        {
          url: 'https://via.placeholder.com/1100',
          width: 1100,
          height: 1100,
        },
      ],
    },
  ];

  return (
    <StorybookWrapper>
      <Image image={images[0]} />
    </StorybookWrapper>
  );
});

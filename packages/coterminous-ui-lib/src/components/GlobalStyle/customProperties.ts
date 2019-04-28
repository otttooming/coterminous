import { css } from 'styled-components';

type CustomPropertySizeValues = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

interface CustomSizePropertyObject {
  name: string;
  value: string;
}

export type CustomSizeProperty<T extends CustomPropertySizeValues = never> = {
  [K in Exclude<CustomPropertySizeValues, T>]: CustomSizePropertyObject
};

function setCustomProperties(
  obj: CustomSizeProperty<Partial<CustomPropertySizeValues>>,
) {
  return Object.values(obj).map(({ name, value }) => `${name}: ${value};`);
}

export const fontSize: CustomSizeProperty = {
  xs: {
    name: '--font-size-xx',
    value: '0.75rem',
  },
  s: {
    name: '--font-size-s',
    value: '0.875rem',
  },
  m: {
    name: '--font-size-m',
    value: '1rem',
  },
  l: {
    name: '--font-size-l',
    value: '1.125rem',
  },
  xl: {
    name: '--font-size-xl',
    value: '1.375rem',
  },
  xxl: {
    name: '--font-size-xxl',
    value: '1.75rem',
  },
  xxxl: {
    name: '--font-size-xxxl',
    value: '2.5rem',
  },
};

export const lineHeight: CustomSizeProperty<'l' | 'xl' | 'xxl' | 'xxxl'> = {
  xs: {
    name: '--line-height-xs',
    value: '1.25',
  },
  s: {
    name: '--line-height-s',
    value: '1.375',
  },
  m: {
    name: '--line-height-m',
    value: '1.625',
  },
};

export const borderRadius: CustomSizeProperty<
  'xs' | 'l' | 'xl' | 'xxl' | 'xxxl'
> = {
  s: {
    name: '--border-radius-s',
    value: '0.25em',
  },
  m: {
    name: '--border-radius-m',
    value: '0.5em',
  },
};

export const space: CustomSizeProperty<'xs' | 'xxl' | 'xxxl'> = {
  s: {
    name: '--space-s',
    value: '0.5rem',
  },
  m: {
    name: '--space-m',
    value: '1rem',
  },
  l: {
    name: '--space-l',
    value: '1.5rem',
  },
  xl: {
    name: '--space-xl',
    value: '2.5rem',
  },
};

export const customProperties = css`
  :root {
    ${setCustomProperties(fontSize)}
    ${setCustomProperties(lineHeight)}
    ${setCustomProperties(borderRadius)}
    ${setCustomProperties(space)}
  }
`;

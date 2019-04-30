import { css } from 'styled-components';

const rootSize: number = 16;

type CustomPropertySizeValues = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

function setCustomProperties<K extends string>(
  obj: CustomPropertyGeneratorReturnObject<K>,
) {
  const values: CustomPropertyGeneratorReturn<K>[] = Object.values(obj);

  return values.map(({ property, value }) => `${property}: ${value};`);
}

interface CustomPropertyGenerator<K extends string> {
  key: K;
  value: string;
}

interface CustomPropertyGeneratorReturn<K extends string> {
  /**
   * Value of property in applicable unit. E.g. 1rem.
   */
  value: CustomPropertyGenerator<K>['value'];
  /**
   * Property in the form of '--space-l'
   */
  property: string;
  /**
   * Variable in the form of 'var(--space-l)'
   */
  variable: string;
}

type CustomPropertyGeneratorReturnObject<K extends string> = {
  [Key in K]: CustomPropertyGeneratorReturn<K>
};

function setCustomPropertyGenerator<K extends string>(
  name: string,
  values: CustomPropertyGenerator<K>[],
): CustomPropertyGeneratorReturnObject<K> {
  return values.reduce(
    (acc, { key, value }) => {
      const customProperty = `--${name}-${key}`;

      acc[key] = {
        value,
        property: customProperty,
        variable: `var(${customProperty})`,
      };

      return acc;
    },
    {} as CustomPropertyGeneratorReturnObject<K>,
  );
}

type ThemeVariableReturn<K extends string> = {
  [Key in K]: CustomPropertyGeneratorReturn<K>['variable']
};

export function setThemeVariable<K extends string>(
  obj: CustomPropertyGeneratorReturnObject<K>,
): ThemeVariableReturn<K> {
  return Object.entries<CustomPropertyGeneratorReturn<K>>(obj).reduce(
    (acc, [key, values]) => {
      const k = key as K;

      acc[k] = values.variable;

      return acc;
    },
    {} as ThemeVariableReturn<K>,
  );
}

export const space = setCustomPropertyGenerator<
  Exclude<CustomPropertySizeValues, 'xs' | 'xxl' | 'xxxl'>
>('space', [
  { key: 's', value: '0.5rem' },
  { key: 'm', value: '1rem' },
  { key: 'l', value: '1.5rem' },
  { key: 'xl', value: '2.5rem' },
]);

export const borderRadius = setCustomPropertyGenerator<
  Exclude<CustomPropertySizeValues, 'xs' | 'l' | 'xl' | 'xxl' | 'xxxl'>
>('border-radius', [
  { key: 's', value: '0.25em' },
  { key: 'm', value: '0.5em' },
]);

export const lineHeight = setCustomPropertyGenerator<
  Exclude<CustomPropertySizeValues, 'l' | 'xl' | 'xxl' | 'xxxl'>
>('line-height', [
  { key: 'xs', value: '1.25' },
  { key: 's', value: '1.375' },
  { key: 'm', value: '1.625' },
]);

export const fontSize = setCustomPropertyGenerator<CustomPropertySizeValues>(
  'font-size',
  [
    {
      key: 'xs',
      value: '0.75rem',
    },
    {
      key: 's',
      value: '0.875rem',
    },
    {
      key: 'm',
      value: '1rem',
    },
    {
      key: 'l',
      value: '1.125rem',
    },
    {
      key: 'xl',
      value: '1.375rem',
    },
    {
      key: 'xxl',
      value: '1.75rem',
    },
    {
      key: 'xxxl',
      value: '2.5rem',
    },
  ],
);

export const fontFamily = setCustomPropertyGenerator<'primary' | 'secondary'>(
  'font-family',
  [
    {
      key: 'primary',
      value: `'Montserrat', 'Helvetica Neue', Arial, sans-serif`,
    },
    {
      key: 'secondary',
      value: `'Helvetica Neue', Arial, sans-serif`,
    },
  ],
);

export const fontWeight = setCustomPropertyGenerator<
  'light' | 'normal' | 'bold'
>('font-weight', [
  {
    key: 'light',
    value: '300',
  },
  {
    key: 'normal',
    value: '400',
  },
  {
    key: 'bold',
    value: '700',
  },
]);

export const customProperties = css`
  :root {
    ${setCustomProperties(fontSize)}
    ${setCustomProperties(fontFamily)}
    ${setCustomProperties(fontWeight)}
    ${setCustomProperties(lineHeight)}
    ${setCustomProperties(borderRadius)}
    ${setCustomProperties(space)}
  }
`;

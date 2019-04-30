const rootSize: number = 16;

function convertNumberToPx(px: number): string {
  return `${px}px`;
}

function convertPxToRem(px: number, root: number): string {
  return `${px / root}rem`;
}

function convertPxToEm(px: number, root: number): string {
  return `${px / root}em`;
}

export interface ColorProps {
  dark: string;
  red: string;
  warm: string;
  white: string;
  green: string;
}

export const color: ColorProps = {
  dark: '#000',
  red: '#a30000',
  warm: '#ffc000',
  white: '#fff',
  green: '#31e184',
};

export interface BackgroundProps {
  main: string;
  input: string;
  section: string;
}
export const background: BackgroundProps = {
  main: 'rgba(186, 0, 251, .15)',
  input: '#9109c7',
  section: '#fff',
};

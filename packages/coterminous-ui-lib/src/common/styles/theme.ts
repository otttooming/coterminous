import {
  ColorProps,
  BackgroundProps,
  SpacingProps,
  TypefaceProps,
  color,
  background,
  typeface,
} from './constants';
import {
  fontSize,
  lineHeight,
  borderRadius,
  space,
  setThemeVariable,
  fontFamily,
} from './customProperties';

export interface CoterminousStyledThemeProps {
  color: ColorProps;
  background: BackgroundProps;
  spacing: SpacingProps;
  typeface: TypefaceProps;
}

export const theme = {
  color,
  background,
  typeface,
  space: setThemeVariable(space),
  borderRadius: setThemeVariable(borderRadius),
  lineHeight: setThemeVariable(lineHeight),
  fontSize: setThemeVariable(fontSize),
  fontFamily: setThemeVariable(fontFamily),
};

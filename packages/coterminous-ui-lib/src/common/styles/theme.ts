import {
  ColorProps,
  BackgroundProps,
  SpacingProps,
  TypefaceProps,
  ShadowProps,
  color,
  background,
  typeface,
  shadow,
} from './constants';
import {
  fontSize,
  lineHeight,
  borderRadius,
  space,
  setThemeVariable,
} from './customProperties';

export interface CoterminousStyledThemeProps {
  color: ColorProps;
  background: BackgroundProps;
  spacing: SpacingProps;
  typeface: TypefaceProps;
  shadow: ShadowProps;
}

export const theme = {
  color,
  background,
  typeface,
  shadow,
  space: setThemeVariable(space),
  borderRadius: setThemeVariable(borderRadius),
  lineHeight: setThemeVariable(lineHeight),
  fontSize: setThemeVariable(fontSize),
};

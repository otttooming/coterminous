import {
  ColorProps,
  BackgroundProps,
  SpacingProps,
  color,
  background,
} from './constants';
import {
  fontSize,
  lineHeight,
  borderRadius,
  space,
  setThemeVariable,
  fontFamily,
  fontWeight,
} from './customProperties';

export interface CoterminousStyledThemeProps {
  color: ColorProps;
  background: BackgroundProps;
  spacing: SpacingProps;
}

export const theme = {
  color,
  background,
  space: setThemeVariable(space),
  borderRadius: setThemeVariable(borderRadius),
  lineHeight: setThemeVariable(lineHeight),
  fontSize: setThemeVariable(fontSize),
  fontFamily: setThemeVariable(fontFamily),
  fontWeight: setThemeVariable(fontWeight),
};

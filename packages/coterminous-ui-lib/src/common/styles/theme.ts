import {
  ColorProps,
  BackgroundProps,
  SpacingProps,
  TypefaceProps,
  TransitionProps,
  ShadowProps,
  color,
  background,
  typeface,
  transition,
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
  transition: TransitionProps;
  shadow: ShadowProps;
}

export const theme = {
  color,
  background,
  typeface,
  transition,
  shadow,
  space: setThemeVariable(space),
  borderRadius: setThemeVariable(borderRadius),
  lineHeight: setThemeVariable(lineHeight),
  fontSize: setThemeVariable(fontSize),
};

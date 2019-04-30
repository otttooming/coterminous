import {
  ColorProps,
  BackgroundProps,
  BorderProps,
  SpacingProps,
  TypefaceProps,
  TransitionProps,
  ShadowProps,
  color,
  background,
  border,
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
  border: BorderProps;
  spacing: SpacingProps;
  typeface: TypefaceProps;
  transition: TransitionProps;
  shadow: ShadowProps;
}

export const theme = {
  color,
  background,
  border,
  typeface,
  transition,
  shadow,
  space: setThemeVariable(space),
  borderRadius: setThemeVariable(borderRadius),
  lineHeight: setThemeVariable(lineHeight),
  fontSize: setThemeVariable(fontSize),
};

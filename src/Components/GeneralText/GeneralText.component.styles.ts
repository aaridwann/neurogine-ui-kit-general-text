import type { TextStyle } from 'react-native';

import Constants from '../../Constants';

import type { TextColor, VariantType } from '../../Types';

const { VARIANT, TEXT_COLOR } = Constants;

const VARIANT_STYLES: Record<VariantType, TextStyle> = {
  [VARIANT.HEADLINE1]: { fontSize: 34, fontWeight: 'bold' },
  [VARIANT.HEADLINE2]: { fontSize: 30, fontWeight: 'bold' },
  [VARIANT.HEADLINE3]: { fontSize: 26, fontWeight: 'bold' },
  [VARIANT.HEADLINE4]: { fontSize: 22, fontWeight: 'bold' },

  [VARIANT.TITLE1]: { fontSize: 24, fontWeight: 'bold' },
  [VARIANT.TITLE2]: { fontSize: 20, fontWeight: 'bold' },
  [VARIANT.TITLE3]: { fontSize: 18, fontWeight: 'bold' },

  [VARIANT.BODY1]: { fontSize: 16, fontWeight: 'normal' },
  [VARIANT.BODY2]: { fontSize: 14, fontWeight: 'normal' },
  [VARIANT.BODY3]: { fontSize: 12, fontWeight: 'normal' },

  [VARIANT.LABEL1]: { fontSize: 16, fontWeight: 'bold' },
  [VARIANT.LABEL2]: { fontSize: 14, fontWeight: 'bold' },
  [VARIANT.LABEL3]: { fontSize: 12, fontWeight: 'bold' },
};

const COLOR_STYLES: Partial<Record<TextColor, string>> = {
  [TEXT_COLOR.PRIMARY]: '#007AFF',
  [TEXT_COLOR.SECONDARY]: '#5AC8FA',
  [TEXT_COLOR.TEXT_PRIMARY]: '#1C1C1E',
  [TEXT_COLOR.TEXT_SECONDARY]: '#8E8E93',
  [TEXT_COLOR.DANGER]: '#FF3B30',
  [TEXT_COLOR.SUCCESS]: '#34C759',
  [TEXT_COLOR.WHITE]: '#FFFFFF',
};

const DEFAULT_STYLE: TextStyle = {
  fontSize: 14,
  fontWeight: 'normal',
  color: '#1C1C1E',
};

/**
 * get text style based on the variant and color
 * @param {VariantType} variant - the variant of the text
 * @param {TextColor} color - optional color of the text
 * @returns {TextStyle} - text style based on the variant and color
 */
export const getTextStyle = (variant: VariantType, color?: TextColor): TextStyle => {
  const baseStyle = VARIANT_STYLES[variant] ?? DEFAULT_STYLE;
  const textColor = color ? (COLOR_STYLES[color] ?? color) : baseStyle.color;

  return {
    ...baseStyle,
    ...(textColor ? { color: textColor } : {}),
  };
};

export default {
  getTextStyle,
};
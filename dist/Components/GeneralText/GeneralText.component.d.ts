import React, { PropsWithChildren } from 'react';
import { Props } from '../../Types';
/**
 * general text component
 * @param {VariantType} variant - the variant of the text
 * @param {React.ReactNode} children - the text to be displayed
 * @param { TextStyle } style - optional custom style to override the default text style
 * @param { string } color - optional color of the text, defaults to #333333
 * @param { number } numberOfLines - optional number of lines to display before truncating the text
 * @param { VoidFunction } onPress - optional callback function to handle press events on the text
 * @returns {React.ReactElement} - returns a React element that displays text with the variant
 */
declare const GeneralText: {
    ({ variant, style, color, numberOfLines, onPress, children, }: PropsWithChildren<Props>): React.ReactElement;
    displayName: string;
};
export default GeneralText;
//# sourceMappingURL=GeneralText.component.d.ts.map
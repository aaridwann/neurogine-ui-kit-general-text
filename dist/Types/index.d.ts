import { StyleProp, TextStyle } from "react-native";
import Constants from "../Constants";
export type VoidFunction = () => void;
export type VariantType = ValueOf<typeof Constants.VARIANT>;
export type TextColor = ValueOf<typeof Constants.TEXT_COLOR>;
type ValueOf<T> = T[keyof T];
export interface Props {
    variant?: VariantType;
    style?: StyleProp<TextStyle>;
    color?: TextColor;
    numberOfLines?: number;
    onPress?: VoidFunction;
}
export {};
//# sourceMappingURL=index.d.ts.map
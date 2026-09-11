import { StyleProp, TextStyle } from "react-native";
import { VARIANT } from "../Constants";
export type VoidFunction = () => void;
export type VariantType = ValueOf<typeof VARIANT> | string;
type ValueOf<T> = T[keyof T];
export interface Props {
    variant: VariantType;
    style?: StyleProp<TextStyle>;
    color?: string;
    numberOfLines?: number;
    onPress?: VoidFunction;
}
export {};
//# sourceMappingURL=index.d.ts.map
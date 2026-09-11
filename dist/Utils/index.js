import { VARIANT } from "../Constants";
const { HEADLINE1, HEADLINE2, HEADLINE3, HEADLINE4, BODY1, BODY2, BODY3, LABEL1, LABEL2, LABEL3, TITLE1, TITLE2, TITLE3, } = VARIANT;
const TEXT_STYLE_MAP = {
    [HEADLINE1]: { fontSize: 32, fontWeight: "bold" },
    [HEADLINE2]: { fontSize: 28, fontWeight: "bold" },
    [HEADLINE3]: { fontSize: 24, fontWeight: "bold" },
    [HEADLINE4]: { fontSize: 20, fontWeight: "bold" },
    [TITLE1]: { fontSize: 24, fontWeight: "600" },
    [TITLE2]: { fontSize: 20, fontWeight: "600" },
    [TITLE3]: { fontSize: 18, fontWeight: "600" },
    [BODY1]: { fontSize: 16, fontWeight: "normal" },
    [BODY2]: { fontSize: 14, fontWeight: "normal" },
    [BODY3]: { fontSize: 12, fontWeight: "normal" },
    [LABEL1]: { fontSize: 16, fontWeight: "bold" },
    [LABEL2]: { fontSize: 14, fontWeight: "bold" },
    [LABEL3]: { fontSize: 12, fontWeight: "bold" },
};
const DEFAULT_STYLE = {
    fontSize: 14,
    fontWeight: "normal",
};
export const getTextStyle = (variant, color = "#333333", customStyle) => {
    const baseStyle = TEXT_STYLE_MAP[variant] ?? DEFAULT_STYLE;
    return {
        ...baseStyle,
        color,
        ...customStyle,
    };
};

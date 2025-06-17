import { fontSizes } from "@Components/utils/FontSizes/FontSizes";
import { AlignFonts, FontWeight } from "@Components/utils";

export type SizesFonts = keyof typeof fontSizes;
export type Aligns = keyof typeof AlignFonts;
export type Weight = keyof typeof FontWeight;

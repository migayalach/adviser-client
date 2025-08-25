import { Lilita_One, Roboto } from "next/font/google";

export const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita-one",
});

export const robotoText = Roboto({
  subsets: ["latin"],
  weight: ["200"],
  variable: "--font-roboto-text",
});

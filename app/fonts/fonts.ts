import localFont from "next/font/local";

export const helveticaNeue = localFont({
  src: [
    { path: "/HelveticaNeueLight.otf", weight: "300", style: "normal" },
    { path: "/HelveticaNeueRegular.otf", weight: "400", style: "normal" },
    { path: "/HelveticaNeueMedium.otf", weight: "500", style: "normal" },
    { path: "/HelveticaNeueBold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});
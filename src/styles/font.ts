import localFont from "next/font/local";

export const fonts = localFont({
  src: [
    {
      path: "./fonts/FuturaCyrillicLight.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FuturaCyrillicBook.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FuturaCyrillicMedium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/FuturaCyrillicBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/FuturaCyrillicExtraBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  preload: true,
  variable: "--base-font"
});

export const SilverSouthScriptFont = localFont({
  src: [
    {
      path: "./fonts/SilverSouthScript.woff",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--SilverSouthScriptFont-font"
});

export const PoppinsFonts = localFont({
  src: [
    {
      path: "./fonts/Poppins-Light.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Regular.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--PoppinsFonts-font"
});

export const CinzelFont = localFont({
  src: [
    {
      path: "./fonts/Cinzel-Regular.woff",
      weight: "600",
      style: "normal",
    }
  ],
  variable: "--CinzelFont-font"
});
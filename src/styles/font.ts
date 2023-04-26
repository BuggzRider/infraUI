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
});

export const SilverSouthScript = localFont({
  src: [
    {
      path: "./fonts/SilverSouthScript.woff",
      weight: "400",
      style: "normal",
    }
  ],
});

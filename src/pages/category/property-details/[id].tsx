import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import Head from "next/head";
import {
  productCenterImageContainerStyles,
  productCenterImageMediaStyles,
  productContainer,
  productSectionContainer,
  productTabComponentBodyContainer,
  productTabComponentContainer,
  productTabComponentHeadingContainer,
  productTabHeadingElementActive,
  productTabHeadingElementContainer,
} from "../../../styles/pageStyles/product.styles";
import { productMock } from "./mockData";
import { OverlayTypes } from "components/MediaContent/MediaOverlayContent/types";
import { mediaOverlayExtraStyles } from "components/MediaContent/MediaOverlayContent/styles";
import TabComponent from "components/TabComponent";
import { useMemo } from "react";
import { processTabSection } from "utils/productPageUtils";

export default function Product() {
  const tabsData = useMemo(() => processTabSection(productMock), []);
  const onEmiClickHandler = () => {};
  const onClickDownloadBrochure = () => {};
  return (
    <div css={(theme) => productContainer(theme)}>
      <Head>
        <title>
          {productMock?.productName ||
            "Commercial and Residential Projects in Gurgaon | RISE Infraventures"}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section css={(theme: any) => productSectionContainer(theme)}>
        <SingleMediaRendered
          url={productMock?.imageSrc}
          mediaStyles={(theme: any) => productCenterImageMediaStyles(theme)}
          containerStyles={(theme: any) =>
            productCenterImageContainerStyles(theme)
          }
          alt={productMock?.alt}
          type={SingleMediaOptions.IMAGE}
          shouldShowOverlay={true}
          overlayTextConfig={{
            type: OverlayTypes.PRODUCT_LAYOUT,
            customOverlayProps: {
              extraContainerStyles: (theme: any) =>
                mediaOverlayExtraStyles(theme),
              whatsappUrl: productMock?.whatsappLink,
              phoneNumber: productMock?.phoneNumber,
              onEmiClickHandler,
              onClickDownloadBrochure,
            },
          }}
        />
      </section>
      <section css={(theme: any) => productSectionContainer(theme)}>
        <TabComponent tabs={tabsData} extraStyles={{
            tabComponentBodyContainer:productTabComponentBodyContainer,
            tabComponentContainer:productTabComponentContainer,
            tabComponentHeadingContainer:productTabComponentHeadingContainer,
            tabHeadingElementActive:productTabHeadingElementActive,
            tabHeadingElementContainer:productTabHeadingElementContainer,
          }}/>
      </section>
    </div>
  );
}

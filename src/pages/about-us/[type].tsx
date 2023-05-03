import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import LayoutContext from "context/layoutContext/layout-context";
import Head from "next/head";
import { useContext } from "react";
import {
  aboutUsCenterImageContainerStyles,
  aboutUsCenterImageMediaStyles,
  aboutUsCenterOverlayTextContainerStyles,
  aboutUsContainer,
  aboutUsInfoStyles,
  aboutUsSectionContainer,
  aboutUsVideoContainerStyles,
  aboutUsVideoStyles,
  tabComponentBodyContainer,
  tabComponentContainer,
  tabComponentHeadingContainer,
  tabHeadingElementActive,
  tabHeadingElementContainer,
} from "../../styles/pageStyles/about-us.styles";
import Info from "./info";
import TabComponent from "components/TabComponent";

export default function AboutUs() {
  const { aboutUsConfig } = useContext(LayoutContext);
  return (
    <div css={(theme) => aboutUsContainer(theme)}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section css={(theme: any) => aboutUsSectionContainer(theme)}>
        <SingleMediaRendered
          url={aboutUsConfig?.centerImageObject?.url}
          mediaStyles={(theme: any) => aboutUsCenterImageMediaStyles(theme)}
          containerStyles={(theme: any) =>
            aboutUsCenterImageContainerStyles(theme)
          }
          alt={aboutUsConfig?.centerImageObject?.alt}
          type={SingleMediaOptions.IMAGE}
          shouldShowOverlay={true}
          overlayTextConfig={{
            extraContainerStyles: (theme: any) =>
              aboutUsCenterOverlayTextContainerStyles(theme),
            ...aboutUsConfig?.centerImageObject?.overlayTextConfig,
          }}
        />
      </section>
      <section
        css={[
          (theme: any) => aboutUsSectionContainer(theme),
          (theme: any) => aboutUsInfoStyles(theme),
        ]}
      >
        <Info config={aboutUsConfig.infoSection} />
      </section>
      <section>
        <TabComponent
          tabs={aboutUsConfig.tabSection}
          extraStyles={{
            tabComponentBodyContainer,
            tabComponentContainer,
            tabComponentHeadingContainer,
            tabHeadingElementActive,
            tabHeadingElementContainer,
          }}
        />
      </section>
      <section css={(theme: any) => aboutUsSectionContainer(theme)}>
        <SingleMediaRendered
          url={aboutUsConfig?.aboutUsVideoObject?.url}
          mediaStyles={(theme: any) => aboutUsVideoStyles(theme)}
          containerStyles={(theme: any) => aboutUsVideoContainerStyles(theme)}
          alt={aboutUsConfig?.aboutUsVideoObject?.alt}
          type={SingleMediaOptions.VIDEO}
          shouldShowOverlay={true}
        />
      </section>
    </div>
  );
}

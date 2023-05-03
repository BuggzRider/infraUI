import NextImageWithFallback from "components/NextImageWithFallback";
import {
  aboutUsInfoMediaContainerStyles,
  aboutUsInfoTextContainerStyles,
  aboutUsInfoStylesContainer,
  aboutUsInfoStylesInnerContainer,
} from "styles/pageStyles/about-us.styles";

const Info = ({ config }: any) => {
  return (
    <div css={(theme) => aboutUsInfoStylesContainer(theme)}>
      <div css={(theme) => aboutUsInfoStylesInnerContainer(theme)}>
        <div css={(theme) => aboutUsInfoMediaContainerStyles(theme)}>
          <NextImageWithFallback
            src={config.url}
            alt={config.alt}
            fill
            priority
            fallback="/assets/images/fallback_landscape.png"
          />
        </div>
        <div
          css={(theme) => aboutUsInfoTextContainerStyles(theme)}
        >
          <p dir="ltr">
            <b>Rise Infraventures Limited</b> is one of India’s leading
            tech-enabled real estate aggregator platform in India. Founded in
            Jan 2021 and growing at a scorching pace, RISE is already the
            largest distributor by revenues for the primary residential real
            estate in Delhi-NCR and it also enjoys monopoly in the high end
            Commercial sales.&nbsp;
          </p>

          <p dir="ltr">&nbsp;</p>

          <p dir="ltr">
            We at the <b>RISE Pledge</b> to be the predominant{" "}
            <b>Reliable &amp; Truthful</b> source of each &amp; every real
            estate transaction in any given occasion, with <b>Integrity</b> as
            our inherited legacy towards customers, associates and fellow mates.
            We will promote <b>Transparency</b>, Ensure the Sustainable growth
            in their portfolios &amp; investments by placing emphasis on{" "}
            <b>Ethics</b> to keep our <b>Commitment</b> intact.&nbsp;
          </p>

          <p dir="ltr">&nbsp;</p>

          <p dir="ltr">
            This Company has been founded by{" "}
            <b>Mr. Sachin Gawri and Mr. Shantanu Gambhir</b> with a crystal
            clear vision to provide end to end services to their client,
            associate and fellow mate their futuristic approach and Dynamic
            leadership attributes bring the best on table.&nbsp;
          </p>

          <p dir="ltr">&nbsp;</p>

          <p>
            RISE is associated with all A+ developers Such as DLF, M3M, Adani,
            Trump Tower, Mahindra, Birla and so on, Along with 500+ channel
            partners across pan India. And sold 25 millions SqFt area in last
            couple of years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;

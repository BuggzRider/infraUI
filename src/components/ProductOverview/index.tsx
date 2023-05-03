import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import {
  productOverviewContainer,
  productOverviewImageMediaStyles,
  productOverviewTextContainerStyles,
  productOverviewTextHeaderStyles,
  productOverviewTextItemBodyStyles,
  productOverviewTextItemHeadingStyles,
  productOverviewTextItemStyles,
  productOverviewTextWrapperStyles,
} from "./styles";
import { ProductOverviewPropTypes } from "./types";
import { Key } from "react";

const ProductOverview = ({
  imageSrc,
  imgAlt,
  heading,
  textItems,
}: ProductOverviewPropTypes) => {
  return (
    <div css={(theme: any) => productOverviewContainer(theme)}>
      <SingleMediaRendered
        url={imageSrc}
        containerStyles={(theme: any) => productOverviewImageMediaStyles(theme)}
        alt={imgAlt}
        type={SingleMediaOptions.IMAGE}
        shouldShowOverlay={true}
      />
      <div css={(theme: any) => productOverviewTextWrapperStyles(theme)}>
        <h1 css={(theme: any) => productOverviewTextHeaderStyles(theme)}>
          {heading}
        </h1>
        <div css={(theme: any) => productOverviewTextContainerStyles(theme)}>
          {textItems.map((item) => (
            <span
              key={item.value as Key}
              css={(theme: any) => productOverviewTextItemStyles(theme)}
            >
              <p
                css={(theme: any) =>
                  productOverviewTextItemHeadingStyles(theme)
                }
              >
                {item.field}
              </p>
              <p css={(theme: any) => productOverviewTextItemBodyStyles(theme)}>
                {item.value}
              </p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;

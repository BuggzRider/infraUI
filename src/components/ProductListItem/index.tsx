import SingleMediaRendered from "components/SingleMediaRenderer";
import {
  productListItemCityName,
  productListItemContainer,
  productListItemDetailsContainer,
  productListItemImageContainer,
  productListItemLinkContainer,
  productListItemMediaContainerStyles,
  productListItemMediaStyles,
  productListItemName,
  productListItemNameAndCityContainer,
  productListItemTextContainer,
} from "./styles";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import LinkButton from "components/UI/Buttons/LinkButton";
import { ProductImagePropTypes } from "./types";
import { css } from "@emotion/react";
import Link from "next/link";

const ProductListImage = ({
  config,
  extraContainerStyles = () => css``,
}: ProductImagePropTypes) => {
  return (
    <Link
      href={config.url}
      css={(theme) => [
        productListItemLinkContainer(theme),
        extraContainerStyles(theme),
      ]}
    >
      <div css={(theme) => productListItemContainer(theme)} id={config.id}>
        <div css={(theme) => productListItemImageContainer(theme)}>
          <SingleMediaRendered
            url={config?.imageSrc}
            mediaStyles={(theme: any) => productListItemMediaStyles(theme)}
            containerStyles={(theme: any) =>
              productListItemMediaContainerStyles(theme)
            }
            alt={config?.alt}
            type={SingleMediaOptions.IMAGE}
            shouldShowOverlay={true}
          />
        </div>
        <div css={(theme) => productListItemDetailsContainer(theme)}>
          <div css={(theme) => productListItemNameAndCityContainer(theme)}>
            <p css={(theme) => productListItemName(theme)}>
              {config.productName}
            </p>
            <p css={(theme) => productListItemCityName(theme)}>
              {config.productCity}
            </p>
            <LinkButton
              isLink={false}
              url={config.url}
              label="View Details"
              extraStyles={() => css`
                color: #666666;
                font-size: 1rem;
                position: relative;
                label: buttonExtraStyles;
              `}
            />
          </div>
          <div css={(theme) => productListItemTextContainer(theme)}>
            <p>ON REQUEST</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductListImage;

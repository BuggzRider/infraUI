import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import ProductOverview from "../components/ProductOverview";
import TabComponent from "components/TabComponent";
import Table from "components/Table";
import { productPageTableColumns } from "constants/productPageConstants";
import ProductAmenities from "components/ProductAmenities";
import {
  productFloorTabComponentBodyContainer,
  productFloorTabComponentContainer,
  productFloorTabComponentHeadingContainer,
  productFloorTabHeadingElementActive,
  productFloorTabHeadingElementContainer,
  productFloorTabImageComponent,
  productFloorTabImageConatainer,
  productTableChildContainer,
} from "styles/pageStyles/product.styles";
import HeadingWrapper from "components/HeadingWrapper";
export const processTabSection = (productDetailsObject: any) => {
  // Processing OverviewTab
  const floorTabComponentArray = productDetailsObject.floorPlan.map((item) => ({
    label: (
      <span>
        <p>{item.floorName}</p>
        <p>{item.areaRange}</p>
      </span>
    ),
    body: (
      <SingleMediaRendered
        url={item?.imageSrc}
        mediaStyles={(theme: any) => productFloorTabImageComponent(theme)}
        containerStyles={(theme: any) => productFloorTabImageConatainer(theme)}
        alt={item.floorName}
        type={SingleMediaOptions.IMAGE}
        shouldShowOverlay={true}
      />
    ),
  }));

  return [
    {
      label: "OVERVIEW",
      body: (
        <ProductOverview
          imageSrc={productDetailsObject.imageSrc}
          imgAlt={productDetailsObject.alt}
          heading={"OVERVIEW"}
          textItems={productDetailsObject.overview}
        />
      ),
    },
    {
      label: "FLOOR PLANS",
      body: (
        <HeadingWrapper
          heading={`${productDetailsObject.productName} - FLOOR PLANS`}
        >
          <TabComponent
            tabs={floorTabComponentArray}
            extraStyles={{
              tabComponentBodyContainer: productFloorTabComponentBodyContainer,
              tabComponentContainer: productFloorTabComponentContainer,
              tabComponentHeadingContainer:
                productFloorTabComponentHeadingContainer,
              tabHeadingElementActive: productFloorTabHeadingElementActive,
              tabHeadingElementContainer:
                productFloorTabHeadingElementContainer,
            }}
          />
        </HeadingWrapper>
      ),
    },
    {
      label: "AREA & PRICING",
      body: (
        <HeadingWrapper
          heading={`${productDetailsObject.productName} - AREA & PRICING`}
        >
          <div css={(theme) => productTableChildContainer(theme)}>
          <Table
            columns={productPageTableColumns}
            data={productDetailsObject.areaPricing}
          />
          </div>
        </HeadingWrapper>
      ),
    },
    {
      label: "AMENITIES",
      body: (
        <ProductAmenities
          amenitiesArray={productDetailsObject.amenities}
          heading={`${productDetailsObject.productName}- AMENITIES`}
        />
      ),
    },
  ];
};

import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import ProductOverview from "../components/ProductOverview";
import TabComponent from "components/TabComponent";
import Table from "components/Table";
import { productPageTableColumns } from "constants/productPageConstants";
import ProductAmenities from "components/ProductAmenities";
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
        // mediaStyles={(theme: any) => productCenterImageMediaStyles(theme)}
        // containerStyles={(theme: any) =>
        //   productCenterImageContainerStyles(theme)
        // }
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
      body: <TabComponent tabs={floorTabComponentArray} />,
    },
    {
      label: "AREA & PRICING",
      body: (
        <Table
          columns={productPageTableColumns}
          data={productDetailsObject.areaPricing}
        />
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

import { CARD_SLIDER_TYPES } from "components/CardSlider/types";
import { ProductPageAmentities } from "constants/productPageConstants";
import { useMemo } from "react";
import { AmenityKeys } from "./types";
import CardSlider from "components/CardSlider";
import { productAmenitiesCSContainer, productAmenitiesCSHeadingContainer, productAmenitiesCSSliderContainer, productAmenitiesSliderArrowStyles, productAmenitiesSliderImage, productAmenitiesSliderImageContainer } from "./styles";

const ProductAmenities = ({ amenitiesArray, heading }: any) => {
  const slides = useMemo(
    () =>
      amenitiesArray.map(
        (amenity: AmenityKeys) => ProductPageAmentities[amenity]
      ),
    [amenitiesArray]
  );
  return (
    <div css={(theme) => productAmenitiesCSContainer(theme)}>
      <div css={(theme) => productAmenitiesCSHeadingContainer(theme)}>
        <h1>{heading}</h1>
      </div>
      <div css={(theme) => productAmenitiesCSSliderContainer(theme)}>
      <CardSlider
        slides={slides}
        type={CARD_SLIDER_TYPES.IMAGE}
        extraStyles={{
          cardSliderImage:productAmenitiesSliderImage,
          cardSliderImageContainer:productAmenitiesSliderImageContainer,
          commonArrowStyles: productAmenitiesSliderArrowStyles
        }}
      />
      </div>
    </div>
  );
};

export default ProductAmenities;

import { CARD_SLIDER_TYPES } from "components/CardSlider/types";
import { ProductPageAmentities } from "constants/productPageConstants";
import { useMemo } from "react";
import { AmenityKeys } from "./types";
import CardSlider from "components/CardSlider";
import { productAmenitiesCardSliderHeadingContainer } from "./styles";

const ProductAmenities = ({ amenitiesArray, heading }: any) => {
  const slides = useMemo(
    () =>
      amenitiesArray.map(
        (amenity: AmenityKeys) => ProductPageAmentities[amenity]
      ),
    [amenitiesArray]
  );
  return (
    <div>
      <div css={(theme) => productAmenitiesCardSliderHeadingContainer(theme)}>
        <p>{heading}</p>
      </div>
      <CardSlider
        slides={slides}
        type={CARD_SLIDER_TYPES.SQUARE_IMAGE}
      />
    </div>
  );
};

export default ProductAmenities;

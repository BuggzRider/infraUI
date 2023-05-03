export type ProductImageConfigType = {
    imageSrc: string;
    alt: string;
    productName: String;
    productCity: String;
    url: string;
    id:string;
}

export type ProductImagePropTypes = {
    config: ProductImageConfigType
    extraContainerStyles?: Function;
}
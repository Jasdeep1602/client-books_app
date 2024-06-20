export declare interface ProductState {
  products: any;
  isFetching: boolean;
  isProductCreated: boolean;
  isImageUploaded: boolean;
}

export declare interface FetchProductInterface {
  data?: { [key: string]: string | number | object | null | boolean };
  params?: { [key: string]: string | number | object | null };
}

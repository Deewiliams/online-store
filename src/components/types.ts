

export interface ProductType {
   id: number,
   title: string,
   image: string,
   price: number,
   category: string 
}

export interface ProductsListType {
    products: ProductType[],

} 
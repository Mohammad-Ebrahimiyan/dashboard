export interface ProductItem {
    image?: string;  
    title: string;
    description: string;
    price?: string;  
    sizes?: string[];  
  }
  
  export interface LatestProductsSectionData {
    items: ProductItem[]; 
    thirdItem: ProductItem;  
  }
  
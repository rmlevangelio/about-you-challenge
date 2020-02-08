import { ProductSearchQuery } from '@aboutyou/backbone/types/ProductSearchQuery';

export interface Product {
  id: number;
  image: string | null;
  name: string;
  price?: string;
}

export type ProductSearchQueryAttributes = ProductSearchQuery['attributes'];

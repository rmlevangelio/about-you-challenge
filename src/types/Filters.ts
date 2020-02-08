import { AttributeKey } from '@aboutyou/backbone/types/AttributeOrAttributeValueFilter';

export interface Filter {
  id: number;
  name: string;
  values: FilterItem[];
  slug: AttributeKey;
}

export interface FilterItem {
  id: number;
  name: string;
}

export interface FilterItemsSelected {
  id: number;
  slug: AttributeKey;
  value: any;
}

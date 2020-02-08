import { Filter } from '../types/Filters';
import { AttributesFilterItemWithValues } from '@aboutyou/backbone/endpoints/filters/filters';
import { AttributeKey } from '@aboutyou/backbone/types/AttributeOrAttributeValueFilter';

export const normalizeFilter = (
  filter: AttributesFilterItemWithValues,
): Filter => ({
  id: filter.id,
  name: filter.name,
  values: filter.values,
  slug: filter.slug as AttributeKey,
});

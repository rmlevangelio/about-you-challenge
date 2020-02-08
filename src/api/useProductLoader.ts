import { useCallback } from 'react';
import { execute } from '@aboutyou/backbone/helpers/execute';
import {
  APISortOrder,
  createProductsSearchEndpointRequest,
} from '@aboutyou/backbone/endpoints/products/products';
import { useAsyncLoader } from './useAsyncLoader';
import { normalizeProduct } from './normalizeProduct';
import { ProductSearchQueryAttributes } from '../types/Product';

const SHOP_ID = 139;

export const useProductLoader = (filters?: ProductSearchQueryAttributes) => {
  const products = useAsyncLoader(
    useCallback(
      () =>
        execute(
          'http://0.0.0.0:9459/v1/',
          SHOP_ID,
          createProductsSearchEndpointRequest({
            where: {
              categoryId: 20290,
              attributes: filters || [],
            },
            pagination: {
              page: 1,
              perPage: 100,
            },
            sort: {
              channel: 'etkp',
              direction: APISortOrder.Descending,
              score: 'category_scores',
            },
            with: {
              attributes: {
                withKey: ['brand'],
              },
              priceRange: true,
            },
          }),
        ).then(({ data }) => data.entities.map(normalizeProduct)),
      [filters],
    ),
  );

  return Array.isArray(products) ? products : [];
};

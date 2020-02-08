import { useCallback } from 'react';
import { execute } from '@aboutyou/backbone/helpers/execute';
import { createFiltersEndpointRequest } from '@aboutyou/backbone/endpoints/filters/filters';
import { useAsyncLoader } from './useAsyncLoader';
import { normalizeFilter } from './normalizeFilter';

const SHOP_ID = 139;

export const useFilterLoader = () => {
  const filters = useAsyncLoader(
    useCallback(
      () =>
        execute(
          'http://0.0.0.0:9459/v1/',
          SHOP_ID,
          createFiltersEndpointRequest({
            where: {
              categoryId: 20290,
            },
          }),
        ).then(({ data }) => data.map(normalizeFilter)),
      [],
    ),
  );

  return Array.isArray(filters) ? filters : [];
};

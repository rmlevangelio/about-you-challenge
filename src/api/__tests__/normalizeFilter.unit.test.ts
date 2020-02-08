import backendFiltersMock from './filters.mock.json';
import { Filter } from '../../types/Filters';
import { normalizeFilter } from '../normalizeFilter';

describe('normalizeFilter', () => {
  let filter: Filter;
  beforeEach(() => {
    filter = normalizeFilter(backendFiltersMock as any);
  });

  it('should transform a backend filter entity into a view model containing id', () => {
    expect(filter.id).toBe(1);
  });

  it('should transform a backend filter entity into a view model containing name', () => {
    expect(filter.name).toBe('Suchfarbe');
  });

  it('should transform a backend filter entity values poperty into a view model containing name', () => {
    expect(filter.values[0].name).toBe('blau');
  });
});

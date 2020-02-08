import * as React from 'react';
import styled from 'styled-components';

import FilterItem from './FilterItem';
import { Filter, FilterItemsSelected } from '../../types/Filters';

interface Props {
  name: Filter['name'];
  slug: Filter['slug'];
  items: Filter['values'];
  onFilterItemSelect: (values: FilterItemsSelected) => void;
}

const FilterGroup: React.FC<Props> = ({
  name,
  slug,
  items,
  onFilterItemSelect,
}) => {
  return (
    <Wrapper>
      <Title>{`Search by ${name}:`}</Title>
      <Content>
        {items.map(filterValue => (
          <FilterItem
            key={`${name}_${filterValue.name}`}
            item={filterValue}
            slug={slug}
            onFilterItemSelect={onFilterItemSelect}
          />
        ))}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 35px 30px 30px 40px;
  border-bottom: 1px solid rgb(229, 229, 229);
`;

const Title = styled.div`
  color: rgb(0, 0, 0);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
`;

const Content = styled.div`
  display: flex;
  padding-top: 5px;
  flex-flow: row wrap;
`;

export default FilterGroup;

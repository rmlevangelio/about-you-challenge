import React, { FC } from 'react';
import styled from 'styled-components';

import { FilterItem, Filter, FilterItemsSelected } from '../../types/Filters';
import Checkbox from '../Checkbox/Checkbox';

interface Props {
  item: FilterItem;
  slug: Filter['slug'];
  onFilterItemSelect: (values: FilterItemsSelected) => void;
}

const FilterItem: FC<Props> = ({ item, slug, onFilterItemSelect }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const onChange = (id: number) => {
    return event => {
      setIsChecked(!isChecked);

      const payload: FilterItemsSelected = {
        id,
        value: event.target.checked,
        slug,
      };
      onFilterItemSelect(payload);
    };
  };

  return (
    <Item key={item.id} htmlFor={`${item.id}`}>
      <ItemCheckboxContainer>
        <Checkbox
          name={item.name}
          id={`${item.id}`}
          checked={isChecked}
          onChange={onChange(item.id)}
        />
      </ItemCheckboxContainer>
      <ItemName>{item.name}</ItemName>
    </Item>
  );
};

const Item = styled.label`
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 15px;
  flex: 1 1 50%;
  cursor: pointer;
`;

const ItemName = styled.div`
  line-height: 1.28571;
  color: rgb(155, 155, 155);
  margin-left: 10px;
  text-transform: capitalize;
  font-weight: 500;

  :hover {
    color: #333;
  }
`;

const ItemCheckboxContainer = styled.div`
  display: inline-block;
`;

export default FilterItem;

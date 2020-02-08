import React, { FC } from 'react';
import styled from 'styled-components';

import FilterGroup from './FilterGroup';
import { Filter, FilterItemsSelected } from '../../types/Filters';
import { ProductSearchQueryAttributes } from '../../types/Product';

interface Props {
  filters: Filter[];
  isOpen: boolean;
  onUpdateSelected: (selected: ProductSearchQueryAttributes) => void;
  toggle: () => void;
}

const Filters: FC<Props> = ({ filters, isOpen, toggle, onUpdateSelected }) => {
  const [payload, setPayload] = React.useState([]);

  React.useEffect(() => {
    if (payload.length !== 0) {
      onUpdateSelected(payload);
    }
  }, [payload]);

  const removeFromSelected = (selected, id) => {
    return selected.filter(value => value !== id);
  };

  const onFilterItemSelect = (params: FilterItemsSelected) => {
    const hasSlug = payload.some(selected => selected.key === params.slug);
    const newSelectedFilter: ProductSearchQueryAttributes = [
      {
        type: 'attributes',
        key: params.slug,
        values: [params.id],
      },
    ];

    if (payload.length !== 0) {
      if (hasSlug) {
        const selected = payload.find(selected => selected.key === params.slug);
        selected.values = params.value
          ? [...selected.values, params.id]
          : removeFromSelected(selected.values, params.id);
        setPayload([...payload, selected]);
      } else {
        setPayload([...payload, ...newSelectedFilter]);
      }
    } else {
      setPayload(newSelectedFilter);
    }
  };

  const isColorOrBrand = slug => {
    return slug === 'color' || slug === 'brand';
  };

  return (
    <>
      <Wrapper isOpen={isOpen}>
        <h2>Filters</h2>
        {filters.map(
          filter =>
            isColorOrBrand(filter.slug) && ( // TODO: Display all filter group with specific layout (e.g dropdown)
              <FilterGroup
                key={filter.name}
                name={filter.name}
                slug={filter.slug}
                items={filter.values}
                onFilterItemSelect={onFilterItemSelect}
              />
            ),
        )}

        <Actions>
          <Button onClick={toggle}>Submit</Button>
        </Actions>
      </Wrapper>
      <Backdrop isOpen={isOpen} onClick={toggle} />
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  width: 410px;
  background: #fff;
  padding: 20px;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: translate(
    ${(props: { isOpen: boolean }) => (props.isOpen ? '0' : '410px')},
    0
  );
  height: 100%;
  box-shadow: -8px 0 16px -16px rgba(0, 0, 0, 0.75);
  z-index: 2;
  overflow: auto;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: ${(props: { isOpen: boolean }) => (props.isOpen ? '1' : '0')};
  transform: translateX(
    ${(props: { isOpen: boolean }) => (props.isOpen ? '0%' : '100%')}
  );
  transition: opacity 300ms ease-in 0s;
`;

const Button = styled.button`
  padding: 10px 20px;
  width: 100%;
  background-color: #000;
  color: #fff;
  border: none;

  :hover {
    cursor: pointer;
  }
`;

const Actions = styled.div`
  padding: 35px 30px 30px 40px;
`;

export default Filters;

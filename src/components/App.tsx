import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header/Header';
import ProductStream from './Product/ProductStream';
import { useProductLoader } from '../api/useProductLoader';
import Filters from './Filter/Filters';
import { useFilterLoader } from '../api/useFilterLoader';
import { ProductSearchQueryAttributes } from '../types/Product';

const App = () => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [selectedFilters, setSelectedFilters] = React.useState<
    ProductSearchQueryAttributes
  >(null);
  const products = useProductLoader(selectedFilters);
  const filters = useFilterLoader();

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const onUpdateSelectedFilters = (
    selectedFilters: ProductSearchQueryAttributes,
  ) => {
    setSelectedFilters(selectedFilters);
  };

  return (
    <>
      <GlobalStyle />
      <Header toggleFilters={toggleFilters} />
      <Layout>
        <ProductStream products={products} />
        <Filters
          isOpen={isFilterOpen}
          filters={filters}
          onUpdateSelected={onUpdateSelectedFilters}
          toggle={toggleFilters}
        />
      </Layout>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Layout = styled.article`
  padding: 0 20px;
`;

export default App;

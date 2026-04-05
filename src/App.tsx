import { useState } from 'react';
import { Page } from './components/Page';
import { ProductTable } from './components/ProductTable';
import { products } from './data';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Page
      title="Products"
      primaryAction={{ label: 'Add product' }}
      secondaryAction={{ label: 'More actions', disclosure: true }}
    >
      <ProductTable
        products={products}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
    </Page>
  );
}

export default App;

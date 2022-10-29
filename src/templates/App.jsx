 import { Header } from '../components/header';
import { NavFilter } from '../components/navegadorFilter';
import { ProductsContent } from '../components/productsContent';
import { ProductProvider } from '../context';
import './App.css';

export default function App() {
  return (
    <ProductProvider>
      <Header />
      <main>
        <NavFilter />
        <ProductsContent />
      </main>
    </ProductProvider>
  );
}


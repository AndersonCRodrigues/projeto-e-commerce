 import { ProductsContent } from '../components/productsContent';
import { ProductProvider } from '../context';
import './App.css';

export default function App() {
  return (
    <ProductProvider>
      <h1>Oi</h1>
      <ProductsContent />
    </ProductProvider>
  );
}


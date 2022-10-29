import { NavFilter } from "../../components/navegadorFilter"
import { ProductsContent } from "../../components/productsContent"
import '../../style/home.css';

export const Home = () => {
  return (
    <main>
      <NavFilter />
      <ProductsContent />
    </main>
  )
}
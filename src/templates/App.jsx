import { Header } from '../components/header';
import { ProductProvider } from '../context';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './home/index ';
import { Cadastro } from './cadastro';
import { Cart } from './cart';
import { Item } from './item';

export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/cadastro' component={Cadastro} />
            <Route path='/carrinho' component={Cart} />
            <Route path='/item' component={Item} />
          </Switch>
      </BrowserRouter>
    </ProductProvider>
  );
}


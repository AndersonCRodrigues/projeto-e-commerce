import '../../style/header.css';
import { ButtonSearch } from '../buttonSearch';
import { CarrinhoIcon } from '../carrinhoIcon';
import { InputSearch } from '../inputSearch';
import { Logo } from '../logo';
// import { RouteLinks } from '../navLinks';
// <RouteLinks />

export const Header = () => {
  return (
    <header>
      <div className='container'>
        <Logo />
      </div>
      <div className='container inputs'>
        <InputSearch />
        <ButtonSearch />
      </div>
      <div className='container'>
        <CarrinhoIcon />
      </div>
    </header>
  );
}
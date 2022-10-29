import '../../style/header.css';
import { CarrinhoIcon } from '../carrinhoIcon';
import { Logo } from '../logo';
import { RouteLinks } from '../navLinks';

export const Header = () => {
  return (
    <header>
      <h1>aqui fica o cabeçalho</h1>
      <Logo />
      <RouteLinks />
      <CarrinhoIcon />
    </header>
  );
}
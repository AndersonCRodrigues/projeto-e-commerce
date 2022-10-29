import '../../style/header.css';
import { CarrinhoIcon } from '../carrinhoIcon';
import { RouteLinks } from '../navLinks';

export const Header = () => {
  return (
    <header>
      <h1>aqui fica o cabeçalho</h1>
      <RouteLinks />
      <CarrinhoIcon />
    </header>
  );
}
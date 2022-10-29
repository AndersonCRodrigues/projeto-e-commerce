import { NavLink } from "react-router-dom"

export const RouteLinks = () => {
  return (
    <nav>
      <NavLink
        to='/'
        activeClassName="selected"
        >Home
      </NavLink>
      <NavLink
        to='/carrinho'
        activeClassName="selected"
        >Carrinho
      </NavLink>
      <NavLink
        to='/cadastro'
        activeClassName="selected"
        >Cadastro
      </NavLink>
    </nav>
  )
}
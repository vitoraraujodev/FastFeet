import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo.png';
import { Container, Content, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <Logo>
            <img src={logo} alt="GoBarber" />
          </Logo>
          <nav>
            <NavLink activeStyle={{ color: '#444' }} to="/delivery">
              ENCOMENDAS
            </NavLink>
            <NavLink activeStyle={{ color: '#444' }} to="/plans">
              ENTREGADORES
            </NavLink>
            <NavLink activeStyle={{ color: '#444' }} to="/registrations">
              DESTINATÁRIOS
            </NavLink>
            <NavLink activeStyle={{ color: '#444' }} to="/help-orders">
              PROBLEMAS
            </NavLink>
          </nav>
        </div>
        <aside>
          <strong>Administrador</strong>
          <span>sair do sistema</span>
        </aside>
      </Content>
    </Container>
  );
}

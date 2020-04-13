import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo.png';
import { Container, Content, Logo } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
            <NavLink activeStyle={{ color: '#444' }} to="/deliveryman">
              ENTREGADORES
            </NavLink>
            <NavLink activeStyle={{ color: '#444' }} to="/recipients">
              DESTINATÁRIOS
            </NavLink>
            <NavLink activeStyle={{ color: '#444' }} to="/problems">
              PROBLEMAS
            </NavLink>
          </nav>
        </div>
        <aside>
          <strong>Administrador</strong>
          <span onClick={handleSignOut}>sair do sistema</span> {/* eslint-disable-line*/}
        </aside>
      </Content>
    </Container>
  );
}

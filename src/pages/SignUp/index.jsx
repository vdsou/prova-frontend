import React from 'react';
import { Title, Wrapper } from './styles';
import UserSign from '../../components/UserSign';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp = () => (
  <Wrapper>
    <UserSign>
      <Title>Cadastre-se agora</Title>
      <Input placeholder="Nome completo" required />
      <Input placeholder="Usuário" required />
      <Input placeholder="Senha" type="password" required />
      <Input placeholder="Confirme sua senha" type="password" required />
      <Button>Cadastrar</Button>
    </UserSign>
  </Wrapper>
);

export default SignUp;

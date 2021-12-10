import React from 'react';
import Title from './styles';
import UserSign from '../../components/UserSign';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => (
  <UserSign colorScheme="quaternary">
    <Title>Faça login</Title>
    <Input placeholder="Usuário" type="text" colorScheme="quaternary" />
    <Input placeholder="Senha" type="password" colorScheme="quaternary" />
    <Button colorScheme="quaternary">Entrar</Button>
  </UserSign>
);

export default SignIn;

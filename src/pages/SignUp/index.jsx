/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';
import Title from './styles';
import UserSign from '../../components/UserSign';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { UserAuthContext } from '../../context/UserAuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const { handleUserSignUp, error, signUpSuccess } = useContext(UserAuthContext);

  useEffect(() => {
    if (userData.password !== userData.passwordConfirm) {
      setShowPasswordCheck(true);
    } else {
      setShowPasswordCheck(false);
    }
  }, [userData]);

  const handleInput = (event) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.password === userData.passwordConfirm) {
      handleUserSignUp(userData);
    }
  };
  return (
    <UserSign onSubmit={handleSubmit}>
      <Title>Cadastre-se agora</Title>
      <Input
        placeholder="Nome completo"
        name="fullName"
        required
        onChange={handleInput}
      />
      <Input
        placeholder="Usuário"
        name="username"
        required
        onChange={handleInput}
      />
      <Input
        placeholder="Senha"
        type="password"
        name="password"
        required
        onChange={handleInput}
      />
      <Input
        placeholder="Confirme sua senha"
        type="password"
        name="passwordConfirm"
        required
        onChange={handleInput}
      />
      <Button>Cadastrar</Button>
      {showPasswordCheck && (
        <ErrorMessage>As senhas devem ser iguais</ErrorMessage>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </UserSign>
  );
};

export default SignUp;

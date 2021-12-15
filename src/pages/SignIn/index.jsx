import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Title from './styles';
import UserSign from '../../components/UserSign';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { UserAuthContext } from '../../context/UserAuthContext';
import ErrorMessage from '../../components/ErrorMessage';

const SignIn = () => {
  // const navigate = useNavigate();
  const { error, handleUserSignIn } = useContext(UserAuthContext);
  const [userData, setUserData] = useState([]);
  const handleInputs = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUserSignIn(userData);
    // navigate('/');
  };
  return (
    <UserSign colorScheme="quaternary" onSubmit={handleSubmit}>
      <Title>Faça login</Title>
      <Input
        placeholder="Usuário"
        name="username"
        type="text"
        colorScheme="quaternary"
        onChange={handleInputs}
        required
      />
      <Input
        placeholder="Senha"
        name="password"
        type="password"
        colorScheme="quaternary"
        onChange={handleInputs}
        required
      />
      <Button colorScheme="quaternary">Entrar</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </UserSign>
  );
};

export default SignIn;

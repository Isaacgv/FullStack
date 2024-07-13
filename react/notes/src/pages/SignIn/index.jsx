import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {  FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Notes</h1>
        <p>links</p>
        <h2>Login</h2>
        <Input 
            placeholder="Email"
            type="text"
            icon={FiMail}
        />
        <Input 
            placeholder="Password"
            type="password"
            icon={FiLock}
        />
        <Button title="Sign In" />

        <a href="#">Create Account</a>
            
      </Form>
      <Background />
    </Container>
  );
}
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
} from 'reactstrap';
import { loginUser } from '../../js/actions/authActions';


const LoginModal = () => {
  const [modal, setModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleLogin = () => {
  dispatch(loginUser({userName,password}));
  history.push("/dashboard");
  setUserName("");
  setPassword("");
  };

  return (
    <div style={{ padding: '0 15px' }}>
      <NavLink onClick={toggle} href="#">
        Login
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="userName">UserName</Label>
              <Input
                type="userName"
                value={userName}
                name="userName"
                id="userName"
                placeholder="userName"
                className="mb-3"
                onChange={(e) => setUserName(e.target.value)}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                value={password}
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={handleLogin} 
              >
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
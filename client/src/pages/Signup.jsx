import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
background-image: url("https://static.vecteezy.com/system/resources/previews/006/180/750/original/chemistry-symbols-icon-set-science-subject-doodle-design-education-and-study-concept-back-to-school-sketchy-background-for-notebook-not-pad-sketchbook-vector.jpg");
background-size: cover;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const CardHeader = styled.h4`
  background-color: #F95D18ff;
  color: #fff;
  padding: 12px;
  margin: 0;
`;

const CardBody = styled.div`
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    button {
      background-color: #F95D18ff;
      color: #fff;
      padding: 12px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    a {
      background-color: #FEBB01ff;
      color: #fff;
      padding: 12px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      text-align: center;
      margin-top: 10px;
    }
  }
`;

const Navbar = styled.nav`
  background-color: #F95D18ff;
  padding: 10px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  h1 {
    color: white;
    align-self: center;
    font-weight: bold;
  }
  ul {
    list-style: none;
    padding: 20px 20px;
    display: flex;
    justify-content: flex-end;
    li {
      margin-left: 10px;
      button {
        background-color: #FEBB01ff;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        font-weight: bold;
        border-radius: 10px;
      }
    }
  }
  `;

const Main = styled.main`
  width: 100%;
  background-color: #F95D18ff;
`;

const ErrorMessage = styled.div`
  background-color: #dc3545;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
`;

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Navbar className='navbar-container'>
          <img src="./public/chem.svg" alt="Logo" />
          <div className='signupTitle-container'>
            <h1>Chem Chicken</h1>
        </div>
          <ul>
            <li>
            <Link to="/login">
            <button>Login</button>
            </Link>
            </li>
          </ul>
        </Navbar>
      <Main>
        <Wrapper>
          <Card>
            <CardHeader>Sign Up</CardHeader>
            <CardBody>

              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    placeholder="Your username"
                    name="username"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  <input
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button type="submit">Submit</button>
                </form>
              )}
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </CardBody>
          </Card>
        </Wrapper>
      </Main>
    </>
  );
};

export default Signup;

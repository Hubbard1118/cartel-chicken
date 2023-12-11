import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

        // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div className='login-wrapper'>
      <main id='login-wrap' className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="col-12 col-lg-6">
          <div className="card">
            <h4 className="card-header align-items-center bg-dark text-light p-2">Login</h4>
            <div className="card-body">
              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className='formInputs'>
                    <input id='email'
                      className="form-input"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <input id='password'
                      className="form-input"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="loginPage-buttons">
                    <button
                      className="btn btn-block btn-primary"
                      id="loginSubmit"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Submit
                    </button>
                    <Link to="/signup">
                      <button
                        className="btn btn-block btn-primary"
                        id="loginSignupBtn"
                        style={{ cursor: 'pointer' }}
                        type="button"
                      >
                        Sign Up
                      </button>
                    </Link>
                  </div>
                </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;

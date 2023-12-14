import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { ELEMENT_QUERY } from '../utils/queries';
import PeriodicTable from './PeriodicTable';
import '../style.css'
import Auth from '../utils/auth';
import styled from 'styled-components';

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
    margin-left: 10%;
    @media (max-width: 684px) {
      font-size: 30px;
    }
    @media (max-width: 641.6px) {
      font-size: 25px;
    }
  }
  ul {
    list-style: none;
    padding: 20px 20px;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 641.6px) {
      padding-top: 0px;
    }
    li {
      margin-left: 10px;
      button {
        background-color: #FEBB01ff;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        font-weight: bold;
        border-radius: 10px;
        margin-left: 10px;
      }
    }
  }
`;

const StyledH1 = styled.h1`
  color: ;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-left: 4%;
`;


const Home = () => {
  // const { loading, data } = useQuery(ELEMENT_QUERY, {
  //   fetchPolicy: "no-cache"
  // });

  return (
    <>
    <div className='home-wrapper'>
    <Navbar className='navbar-container'>
        <img src="./public/chem.svg" alt="Logo" />
        <h1>Chem Chicken</h1>
        {/* logout */}
        <ul>
          <li>
          <Link to="/profile">
        <button>Profile</button>
      </Link>
          <Link>
        <button onClick={Auth.logout}>LogOut</button>
      </Link>
          </li>
        </ul>
      </Navbar>
      <StyledH1>The Periodic Table of Elements</StyledH1>
      <PeriodicTable />
      <footer className='home-footer'>Made by <img src="./public/mern&burn.svg" alt="dev" /></footer>
    </div> 
    </> 
     

  );
};

export default Home;


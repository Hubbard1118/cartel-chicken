import React from 'react';
import styled from 'styled-components';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

// Styled Components
const Container = styled.div`
  min-height: 100vh;
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

const ProfileHeader = styled.header`
  text-align: right;
  padding: 30px;
  h1 {
    margin-bottom: 5px;
    font-size: 3rem;
    color: white;
    font-weight: bold;
  }
`;

const MainContent = styled.main`
    padding: 20px;
    color: white;
    h2 {
        margin-bottom: 10px;
        font-weight: bold;
    }

`;
const CardContainer = styled.div`
  border: 4px solid #F95D18ff;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  margin: 16px;
  max-width: 300px;
  height: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #F95D18ff;
  display: flex;
  flex-direction: column;
   button {
    background-color: #FEBB01ff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
   }
`;

const CardTitle = styled.h3`
  color: #FEBB01ff;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  color: white;
`;

const CardImage = styled.img`
  max-width: 100%;
  align-items: center;
  height: 75px;
  border-radius: 8px;
  margin: 8px;
`;

// ProfilePage Component
const ProfilePage = () => {
  const userName = "My";


  return (
    <div className='profile-wrapper'>
      <Container>
        <Navbar className='navbar-container'>
        <img src="./public/chem.svg" alt="Logo"/>
        <ProfileHeader className='profileHeader'>
          <h1>{userName}'s Profile</h1>
        </ProfileHeader>
          {/* logout */}
          <ul>
            <li>
              <button onClick={Auth.logout}><b>Logout</b></button>
            </li>
          <br />
            <li>
            <Link to="/home">
                <button><b>Home</b></button>
            </Link>
            </li>
          </ul>
        </Navbar>

        <div className='break'></div>

        <div className='compound-container'>
          <MainContent className='components-container'>
          <h2>Learn YOUR Compounds:</h2>
          </MainContent>
          
          <CardContainer>
          <CardTitle>Oxygen</CardTitle>
          <CardText>Formula: </CardText>
          <CardText>Molecular Weight: </CardText>
        <CardImage src="https://www.newtondesk.com/wp-content/uploads/2019/04/oxygen-electron-configuration.png" alt={name} />
        <button>Delete</button>
          </CardContainer>
        </div>
        <footer className='home-footer'>MADE BY <img src="./public/mern&burn.svg" alt="dev" /> TEAM!</footer>
      </Container>
    </div>  
  );
};

export default ProfilePage;

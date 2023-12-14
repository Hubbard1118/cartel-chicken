import React from 'react';
import styled from 'styled-components';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { GET_ELEMENTS_BY_USER } from "../utils/queries";
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

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
    @media screen and (max-width: 624px) {
      flex-wrap: wrap;
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
    @media screen and (max-width: 898.4px) {
      font-size: 30px;
    }
    @media screen and (max-width: 530px) {
      font-size: 20px;
    }
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
  margin: 16px;
  width: 300px;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #F95D18ff;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 700px) {
    flex-wrap: wrap;  
  }
   button {
    background-color: #FEBB01ff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
   }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;

// ProfilePage Component
const ProfilePage = () => {
  const [elements, setElements] = useState([]);
  const { loading, error, data } = useQuery(GET_ELEMENTS_BY_USER);
  
  
  useEffect(() => {
    if(data){
      setElements(data.user.elements);
      console.log(data);
    }
  },[data]);

  if(elements) {
    console.log(elements);
  }

  return (
    <div className='profile-wrapper'>
      <Container>
        <Navbar className='navbar-container'>
        <img src="./public/chem.svg" alt="Logo"/>
        <ProfileHeader className='profileHeader'>
          <h1>{data.user.username}'s Profile</h1>
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
        <Wrapper> 
      {elements.map((element, index) => {
        {console.log("Test")}
        return ( 
            
        <CardContainer  key={index}>
          <div className="card " >
            <div className="card-body">
                <h4 className="card-title">{element.symbol} - {element.name} </h4>
                <p className="card-text">Atomic Number: {element.atomicNumber}</p>
                <p className="card-text">Atomic Mass: {element.atomicMass}</p>
                <p className="card-text">Category: {element.category}</p>
                <p className="card-text">Group: {element.group}</p>
                <p className="card-text">Period: {element.period}</p>
                <p className="card-text">Block: {element.block}</p>
                <p className="card-text">Electronegativity: {element.electronegativity}</p>
                <p className="card-text">Electron Configuration: {element.electronConfiguration}</p>
                {/* <a onClick={() => handleSaveElement(element.elementId)} className="btn btn-primary" id="save">Save Element!</a> */}
            </div>
          </div>
        </CardContainer>
        )
      })}
      </Wrapper>
      </Container>
    </div>  
  );
};

export default ProfilePage;

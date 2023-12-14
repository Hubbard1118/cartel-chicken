import React from 'react';
import styled from 'styled-components';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { GET_ELEMENTS_BY_USER } from "../utils/queries";
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { REMOVE_ELEMENT } from "../utils/mutations";
import { useMutation } from '@apollo/client';

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
  const [{user},  loading, error, data ] = useQuery(GET_ELEMENTS_BY_USER);
  const [removeElement] = useMutation(REMOVE_ELEMENT);

  const handleRemoveElement = async () => {
    //Get Elements
      console.log(user);

      const elementToSave = {
        _id: data.element._id,
        name: data.element.name,
        symbol: data.element.symbol,
        atomicNumber: data.element.atomicNumber,
        atomicMass: data.element.atomicMass,
        category: data.element.category,
        group: data.element.group,
        period: data.element.period,
        block: data.element.block,
        electronConfiguration: data.element.electronConfiguration,
        electronegativity: data.element.electronegativity,
      }
    
      console.log(elementToSave);
      // get token
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }

      try {
        const elementSaved = await removeElement({
          variables: { elementData : elementToSave },
        });

  
        // setSavedElementIds([...savedElementsIds, elementToSave._id]);
        console.log("Test2");
        console.log(elementSaved);
      } catch (err) {
        console.error(err);
      }
    };
    
  
  
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
          <h1>'s Profile</h1>
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
                <a onClick={() => handleRemoveElement(element.elementId)} className="btn btn-primary" >Delete</a>
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

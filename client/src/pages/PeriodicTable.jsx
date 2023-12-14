import "./periodicTable.css";
import element_data from "../PeriodicTableJSON.json";
import { useLazyQuery } from "@apollo/client";
import { useState, useEffect } from 'react';
import { GET_ONE_ELEMENT } from "../utils/queries";
import { ADD_ELEMENT } from "../utils/mutations";
import { saveElementIds, getSavedElementsIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

const PeriodicTable = () => {
  const [element, {loading: dataLoading, error, data}]  = useLazyQuery(GET_ONE_ELEMENT);
  const [selectedElement, setSelectedElement] = useState('');
  const [savedElementsIds, setSavedElementIds] = useState(getSavedElementsIds());
  const [savedElement] = useMutation(ADD_ELEMENT);

  useEffect(() => {
    return () => saveElementIds(savedElementsIds);
  });

  const handleButtonClick = async (elementName) => {
      console.log(elementName);
       await element({
          variables: {
              name: elementName
            }
        });
        setSelectedElement(elementName);
    };

    const handleSaveElement = async (elementId) => {

        const elementToSave = savedElement.find((element) => element.elementId === elementId);
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }
    
        try {
          const { data } = await savedElement({
            variables: { $elementData : { ...elementToSave }},
          });
    
          
          console.log(data.savedElement);
    
          // if book successfully saves to user's account, save book id to state
          setSavedElementIds([...savedElementsIds, elementToSave.elementId]);
          
          console.log(savedElementsIds);
        } catch (err) {
          console.error(err);
        }
      };
    if (dataLoading) return <p>Loading...</p>;

  return (
    <>
        <div className="periodic-table-wrapper">
        {element_data.elements.map((element) => (
            <button 
            onClick={() => handleButtonClick(element.name)}
            className="buttons"
            key={element.name}
            style={{
                gridColumn: element.xpos,
                gridRow: element.ypos,
            }}
            >
            {element.symbol}
            </button>
        ))}
        </div>

        {data && (
        <div className="card " style={{
            'width': '20%'}}>
            <div className="card-body">
                <h4 className="card-title">{data.element.symbol} - {data.element.name} </h4>
                <p className="card-text">Atomic Number: {data.element.atomicNumber}</p>
                <p className="card-text">Atomic Mass: {data.element.atomicMass}</p>
                <p className="card-text">Category: {data.element.category}</p>
                <p className="card-text">Group: {data.element.group}</p>
                <p className="card-text">Period: {data.element.period}</p>
                <p className="card-text">Block: {data.element.block}</p>
                <p className="card-text">Electronegativity: {data.element.electronegativity}</p>
                <p className="card-text">Electron Configuration: {data.element.electronConfiguration}</p>
                <a onClick={() => handleSaveElement(element.elementId)} className="btn btn-primary" id="save">Save Element!</a>
            </div>
        </div>   
        )}

        
    </>
  
)};

export default PeriodicTable;

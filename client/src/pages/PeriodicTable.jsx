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

  // Query by name based on element clicked
  const handleButtonClick = async (elementName) => {
       await element({
          variables: {
              name: elementName
            }
        });
        setSelectedElement(elementName);
    };
// Add element to User profile
    const handleSaveElement = async () => {
      //Get Elements
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
          image: data.element.image,
        }

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }

        try {
          const elementSaved = await savedElement({
            variables: { elementData : elementToSave },
          });
  
    
          // setSavedElementIds([...savedElementsIds, elementToSave._id]);
          console.log("Test2");
          console.log(elementSaved);
        } catch (err) {
          console.error(err);
        }
      };
    if (dataLoading) return <p>Loading...</p>;

  return (
    <>
          {/*controls periodic table  */}
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
{/* conditionally renders card when clicked */}
        {data && (
        <div className="card1 " style={{
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
                <img src={data.element.image} width='250' height='250'></img>
                <a onClick={() => handleSaveElement(element.elementId)} className="btn btn-primary" id="save">Save Element!</a>
            </div>
        </div>   
        )}

        
    </>
  
)};

export default PeriodicTable;

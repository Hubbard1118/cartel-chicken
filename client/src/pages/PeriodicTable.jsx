import "./periodicTable.css";
import element_data from "../PeriodicTableJSON.json";
import { useLazyQuery } from "@apollo/client";
import { GET_ONE_ELEMENT } from "../utils/queries";
import { useState } from "react";
import Card from "./Card";

const PeriodicTable = () => {
  const  [element, {loading: dataLoading, error, data}]  = useLazyQuery(GET_ONE_ELEMENT);
  const [selectedElement, setSelectedElement] = useState('');
  
  const handleButtonClick = async (elementName) => {
      console.log(elementName);
       await element({
          variables: {
              name: elementName
            }
        });
        setSelectedElement(elementName);
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
                <a href="/profile" className="btn btn-primary">Save Element!</a>
            </div>
        </div>   
        )}

        
    </>
  
)};

export default PeriodicTable;

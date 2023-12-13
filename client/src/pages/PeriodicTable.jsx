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
            'width': '30%'}}>
            <div className="card-body">
                <h5 className="card-title">{data.element.name} - {data.element.symbol}</h5>
                <p className="card-text">Number: {data.element.atomicNumber}</p>
                <p className="card-text">Mass: {data.element.atomicNumber}</p>
                <p className="card-text">{data.element.atomicNumber}</p>
                <a href="/profile" className="btn btn-primary">Add to your saved Elements!</a>
            </div>
        </div>   
        )}

        
    </>
  
)};

export default PeriodicTable;

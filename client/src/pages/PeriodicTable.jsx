import "./periodicTable.css";
import element_data from "../PeriodicTableJSON.json";
import { useQuery } from "@apollo/client";
import { GET_ONE_ELEMENT } from "../utils/queries";
import { useState } from "react";

const PeriodicTable = () => {
  const [elementData, setElementData]= useState('')

  const  {data}  = useQuery(GET_ONE_ELEMENT, {
    variables: { name: elementData },
    pollInterval: 500
});


  console.log("Fetched data:", data);


  return (
    <>
    <div className="periodic-table-wrapper">
      {element_data.elements.map((element) => (
        <button
          onClick={() => setElementData(element.name)}
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

    <div className="card ">
        <img></img>
        <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">Click below to save!</p>
            <a href="/profile" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </>
  
)};

export default PeriodicTable;

import "./periodicTable.css";
import element_data from "../PeriodicTableJSON.json";
import { useQuery } from "@apollo/client";
import { GET_ONE_ELEMENT } from "../utils/queries";
import { useState } from "react";

const PeriodicTable = () => {
  const [elementData, setElementData]= useState('')

  const { data } = useQuery(GET_ONE_ELEMENT, {
    variables: { name: elementData },
    pollInterval: 500
});


  console.log("Fetched data:", data);


  return (
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
  );
};

export default PeriodicTable;

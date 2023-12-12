import './periodicTable.css'
import data from '../PeriodicTableJSON.json';


const PeriodicTable = () => {
    return <div className='periodic-table-wrapper'>
        {data.elements.map(element => <button           className='buttons' key={element.name} style={{
            gridColumn: element.xpos,
            gridRow: element.ypos,
            }}>{element.symbol}</button>)}
    </div>;
};

export default PeriodicTable;

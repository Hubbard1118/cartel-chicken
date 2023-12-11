import data from '../PeriodicTableJSON.json';

const PeriodicTable = () => {
    return <div className='periodic-table-wrapper'>
        {data.elements.map(element => <div key={element.name}>{element.symbol}</div>)}
    </div>;
};

export default PeriodicTable;

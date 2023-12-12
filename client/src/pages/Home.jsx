import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { ELEMENT_QUERY } from '../utils/queries';
import PeriodicTable from './PeriodicTable';
import '../style.css'


const Home = () => {
  // const { loading, data } = useQuery(ELEMENT_QUERY, {
  //   fetchPolicy: "no-cache"
  // });


  return (
    <>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              <form className="d-flex " role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>


      <div className="header">
        <h1>Welcome to Chem Chicken!</h1>
      </div>

      <PeriodicTable />
    </> 
     

  );
};

export default Home;


import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { ELEMENT_QUERY } from '../utils/queries';
import PeriodicTable from './PeriodicTable';
import '../style.css'
import Auth from '../utils/auth';


const Home = () => {
  // const { loading, data } = useQuery(ELEMENT_QUERY, {
  //   fetchPolicy: "no-cache"
  // });

  return (
    <>
    <div className='home-wrapper'>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
          <button 
            id='home-logout-btn'
            className="btn btn-outline-warning"
            onClick={Auth.logout}
          >
            <b>Logout</b>
          </button>
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
            <div className="header">
            <h1><b>Chem Chicken</b></h1>
            </div>
            <a id='home-profile-btn' class="btn btn-primary" href="/profile" role="button"><b>Profile</b></a>
          </div>
        </nav>
      <PeriodicTable />
      <footer className='home-footer'>Made by <img src="./public/mern&burn.svg" alt="dev" /> team!</footer>
    </div> 
    </> 
     

  );
};

export default Home;


import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });


  return (
    <>
    <div className='home-wrapper'>
      <div className='top-container'>
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active homeLink" aria-current="page" href="/">Home</a>
                  </li>
                  <li class="nav-item profileLink">
                    <a class="nav-link" href="/profile">Profile</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="title text-center">CHEM CHICKEN</div>
          <img src="chem.svg" alt="chicken logo" />
        </div>
          <div className="periodic-table-wrapper">
            <div className="periodic-table-title container text-center">
              <div className="row">
                <div className="col">Column</div>
                <div className="col col-6">Column</div>
                <div className="col">Column</div>
              </div>
            </div>

        </div>
      </div>
    </> 
     

  );
};

export default Home;


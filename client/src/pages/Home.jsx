import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });


  return (
    <>
    <div className="title align-center">Welcome to Chem Chicken!</div>
      <div className="periodic-table-wrapper">
        <div className="periodic-table-title container text-center">
          <div className="row">
            <div className="col">Column</div>
            <div className="col col-6">Column</div>
            <div className="col">Column</div>
          </div>
        </div>

    </div>
    </> 
     

  );
};

export default Home;


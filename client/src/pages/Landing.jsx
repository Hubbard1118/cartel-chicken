import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Landing = () => {
    return (
        <>
    <div className='welcome-wrapper'>
        <div className='chicken-container'>
            <img src="start-chicken.png" alt="Chem Chicken"></img>
        </div>
        <div className='welcomeCard-wrapper'>
            <Card className='welcome'>
                <Card.Body><br /><h1>Hello! <br /> Welcome to Chem Chicken!</h1>
                <br />
                <p>Below, please click either the Login or Signup button.</p>
                <br />
                <Button className='px-10' href="/login">Login</Button> <Button href="/signup">Signup</Button>
                <br />
                </Card.Body>
            </Card>
        </div>
    </div>
    </>
    );
};

export default Landing;
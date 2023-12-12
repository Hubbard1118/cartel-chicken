import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Landing = () => {
    return (
        <>
    <div className='welcome-wrapper'>
        <div className='chicken-container'>
            <a href="/login"><img src="start-chicken.png" alt="Chem Chicken" /></a>
        </div>
            <div className='w'>
            <h1> Welcome to Chem Chicken!</h1>
            <p>To enhance you learning experience please log in or create an account</p>
            <Button className='btn' href="/login">Login</Button> <Button href="/signup">Signup</Button>
            </div>
    </div>
    </>
    );
};

export default Landing;
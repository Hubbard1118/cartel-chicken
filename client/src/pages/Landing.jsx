import Card from 'react-bootstrap/Card';

const Landing = () => {
    return (
        <>
        <a href="/login"><img src="start-chicken.png" alt="Chem Chicken" /></a>
        <Card className='welcome'>
            <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
    </>
    );
};

export default Landing;
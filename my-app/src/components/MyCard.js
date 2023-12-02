import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/card.css'

function MyCard(props) {
  return (
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Title>{props.price}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
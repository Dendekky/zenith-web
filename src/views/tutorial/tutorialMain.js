import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './tutorial.scss'



const TutorialMain = () => {

  return (
    <div className='root'>
        <section className='bold'>
            <h3>
                The Best Centre For Students
            </h3>
            <p>With centers spanninng across the city, we're bringing quality education to you with convenience</p>
        </section>
        <section className='bottom'>
            <Card style={{ width: '8rem', margin: '4px' }}>
            <Card.Img variant="top" src={require('../../assets/img/utme.png')} />
            <Card.Body>
            <Card.Title>UTME</Card.Title>
            </Card.Body>
            </Card>
            <Card style={{ width: '8rem', margin: '4px' }}>
            <Card.Img variant="top" src={require('../../assets/img/jupeb.jpg')} />
            <Card.Body>
            <Card.Title>JUPEB</Card.Title>
            </Card.Body>
            </Card>
            <Card style={{ width: '8rem', margin: '4px' }}>
            <Card.Img variant="top" src={require('../../assets/img/waec.jpg')} />
            <Card.Body>
            <Card.Title>WASSCE</Card.Title>
            </Card.Body>
            </Card>
            <Card style={{ width: '8rem', margin: '4px' }}>
            <Card.Img variant="top" src={require('../../assets/img/neco.jpg')} />
            <Card.Body>
            <Card.Title>NECO</Card.Title>
            </Card.Body>
            </Card>
        </section>
    </div>
  );
}

export default TutorialMain;
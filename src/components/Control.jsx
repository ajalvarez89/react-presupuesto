import React from 'react'
import { Card } from 'react-bootstrap'

const Control = ({dinero, resto}) => {

  return(
    <>
     <Card>
       <Card.Body>
        <Card.Title>Presupeusto Actual</Card.Title>
        <Card.Text>Presuepuesto: $ {dinero}</Card.Text>
        <Card.Text>Restante: $ {resto}</Card.Text>
       </Card.Body>
     </Card>
    </>
  );
}

export default Control;
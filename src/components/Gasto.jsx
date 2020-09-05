import React from 'react';
import { ListGroup } from 'react-bootstrap'


const Gasto = ({gasto}) => (
  <>
    <ListGroup>
      <ListGroup.Item>{gasto.nombre}</ListGroup.Item>
      <ListGroup.Item>{gasto.monto}</ListGroup.Item>
    </ListGroup>
  </>
)

export default Gasto;

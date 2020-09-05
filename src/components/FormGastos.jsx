import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import Error from './Error'
import shortID from 'shortid'


const FormGastos = ({nuevoGasto, setCrearGasto}) => {
  const [nombre, setNombre] = useState('');
  const [monto, setMonto] = useState();
  const [error, setError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault()

    if(monto < 1 || isNaN(monto) || nombre.trim() === '') {
      setError(true);
      return
    }

    setError(false)
    //Crear los gastos
    const gasto = {
      nombre,
      monto,
      id: shortID.generate()
    }

    //Pasarlos al componente principal
    nuevoGasto(gasto);
    setCrearGasto(true);

    //reset del form
    setNombre('');
    setMonto(0);
  };

  return (
    <>
      <Form onSubmit={agregarGasto}>
        <Form.Label><h2>Agregar gasto nuevo</h2></Form.Label>
        <Form.Group>
          <Form.Control type='text' placeholder='¿en que gastaste?' value={nombre} onChange={e => setNombre(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Control type="number" placeholder='Ejemplo: $500' value={monto} onChange={e => setMonto(parseInt(e.target.value))} />
        </Form.Group>
        {error ? <Error alertaError='Todos los campos obligatorios'/> : null}
        <Button block={true} variant='primary' type='submit'>Agregar gasto</Button>
      </Form>
    </>
  );
}

export default FormGastos;

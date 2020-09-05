import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import Error from './Error'

const Saldo = ({setDinero, setResto}) => {

  const [error, setError] = useState(false);
  const [presupuesto, setPresupeusto] = useState(0);

  const cargarPresupuesto = (e) =>{
    setPresupeusto(parseInt(e.target.value))
  }

  const submitPresupuesto = (e) => {
    e.preventDefault(); //previene recarga de pagina al submit

    if (presupuesto < 1 || isNaN(presupuesto)){
      setError(true);
      return;
    }

    setError(false);
    setDinero(presupuesto);
    setResto(presupuesto);
  };

  return(
    <>
      <Form onSubmit={submitPresupuesto}>
        <Form.Group>
          <Form.Label>Ingresa tu presupuesto</Form.Label>
          <Form.Control type="number" placeholder="Ingresa tu presupuesto" onChange={cargarPresupuesto} />
          <Form.Text className="text-muted">Acá tu dinero rinde más</Form.Text>
        </Form.Group>

        {error ? <Error alertaError="Coloca un monto superior a 0" /> : null }

        <Button block={true} varian="primary" type="submit">
          Ingresa dinero
        </Button>
      </Form>
    </>
  );
}

export default Saldo;
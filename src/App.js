import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Navbar, Nav, Jumbotron} from 'react-bootstrap';
import './App.scss';
import Saldo from './components/Saldo';
import Control from './components/Control';
import FormGastos from './components/FormGastos'
import ListadoGastos from './components/ListadoGastos'

function App() {

  const [dinero, setDinero] = useState(0);
  const [resto, setResto] = useState(0);
  const [gastos, setGastos ] = useState([]);
  const [gasto, setGasto ] = useState({});
  const [crearGasto, setCrearGasto ] = useState(false);
  // const [error, setError] = useState(0);

  useEffect(() => {
    if(crearGasto) {
      setGastos([
        ...gastos, //no sobreescribe si no que agrega (rest operator)
        gasto
      ])

      //resta del presupesto
      const dineroRestante = resto - gasto.monto

      //paso calculo al resto
      setResto(dineroRestante)

      setCrearGasto(false)
    }
  }, [crearGasto, gasto, gastos, resto])

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className="Navbar">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://react-bootstrap.github.io/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        Presupuesto
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
      </Navbar>

      <Jumbotron>
        <h1>Calculadora de Presupuesto!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
      </Jumbotron>

      <Container className="body">
        <Row>
          <Col>
            <Saldo
              setDinero = {setDinero}
              setResto = {setResto}
            />
          </Col>
          <Col>
            <Control
              dinero = {dinero}
              resto = {resto}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGastos
              nuevoGasto = {setGasto}
              setCrearGasto = {setCrearGasto}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ListadoGastos
              gastos = {gastos}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
